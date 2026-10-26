import test from 'node:test';
import assert from 'node:assert/strict';
import {modules,questions,isCorrect,normalize,correctAnswer} from '../content.js';

test('all 48 questions have unique IDs, valid answers and an explicit source',()=>{
 assert.equal(modules.length,10);
 assert.equal(questions.length,48);
 assert.equal(new Set(questions.map(q=>q.id)).size,48);
 for(const q of questions){
  assert.ok(q.prompt && q.why && q.section,q.id);
  assert.ok(q.page>=1&&q.page<=4 || q.id==='ap2',q.id);
  assert.ok(isCorrect(q,q.type==='choice'?q.answer:q.answers[0]),q.id);
  if(q.type==='choice'){
   assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,q.id);
   assert.equal(new Set(q.options).size,q.options.length,q.id);
   q.options.forEach((_,i)=>assert.equal(isCorrect(q,i),i===q.answer,q.id));
  }else{
   assert.equal(isCorrect(q,q.original),false,q.id+' must require an edit');
   assert.ok(correctAnswer(q).length>0);
  }
 }
});
test('typed grading accepts equivalent typography and spacing but preserves house-style distinctions',()=>{
 assert.equal(normalize('  boys’   basketball  '),"boys' basketball");
 assert.ok(isCorrect(questions.find(q=>q.id==='sp1'),' varsity boys basketball '));
 assert.equal(isCorrect(questions.find(q=>q.id==='c1'),'homecoming'),false);
 assert.equal(isCorrect(questions.find(q=>q.id==='p3'),"PDF's"),false);
 assert.equal(isCorrect(questions.find(q=>q.id==='s2'),'Maya Chen, 12'),false);
});
test('only one AP extension drill uses an external rule; hierarchy drills cite the supplied guide',()=>{
 assert.deepEqual(questions.filter(q=>!q.page).map(q=>q.id),['ap2']);
 assert.equal(questions.find(q=>q.id==='s3').options[2],'Sofia said.');
 assert.equal(correctAnswer(questions.find(q=>q.id==='sp2')),'a 55-54 loss to Clements');
 assert.equal(correctAnswer(questions.find(q=>q.id==='c1')),'Homecoming');
});

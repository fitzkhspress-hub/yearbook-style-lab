"""Open a local preview with Python's standard library; no package installation needed."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
import webbrowser

root = Path(__file__).resolve().parent
handler = partial(SimpleHTTPRequestHandler, directory=str(root))
try:
    server = ThreadingHTTPServer(("127.0.0.1", 8787), handler)
except OSError:
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
url = f"http://127.0.0.1:{server.server_port}"
print(f"Style Lab preview: {url}\nKeep this window open. Press Control+C to stop.", flush=True)
threading.Timer(0.4, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()

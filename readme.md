# Ipynb Viewer : browser extension


This extension opens your .ipynb file, using the current jupyter process.

Configured using PORT and JUPYTER_PATH


Which is basically going from

"file:://JUPYTER_PATH/foo/bar/your_ipynb_file.ipynb"
to
"http://localhost:PORT/notebooks/foo/bar/your_ipynb_file.ipynb"


Tested In Chrome.


## How to use this?

1. git clone this repo
1. edit chrome/background.js to customize JUPYTER_PATH (NECESSARY), and PORT.
  The JUPYTER_PATH is most likely the location at which you ran `jupyter notebook`
  on.
1. Open Chrome and navigate to `chrome://extensions/`
1. Turn on developer mode (right corner)
1. select load unpacked, and select the `ipynb_viewer/chrome` folder.

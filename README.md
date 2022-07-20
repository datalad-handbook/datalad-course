# DataLad course material 

This repository contains the raw sources for talks and workshops on DataLad.
Its content is based on the [DataLad handbook](http://handbook.datalad.org), and its technical backbone is [reveal.js](https://github.com/hakimel/reveal.js/).

You can find a rendered version of the slides at [datasets.datalad.org/datalad/datalad-course/html](http://datasets.datalad.org/datalad/datalad-course/html/).

### Code-along software setup for users

In order to follow a DataLad talk or workshop, you can set up the required
software on your own system. Note that this works best on Linux and Mac, Windows users might want to rely on alternative Unix-like compute environments such as shared compute clusters or JupyterHub instances that are provided for DataLad Workshops.

In addition to [installing DataLad](https://handbook.datalad.org/r.html?install), please download the [ws-py-requirements.txt](./ws-py-requirements.txt) file from this repository, and do the following:

```bash
# create and activate a virtual environment
virtualenv --system-site-packages --python=python3 ~/.venvs/rdm-workshop
source ~/.venvs/rdm-workshop/bin/activate
# install a set of common Python packages used in workshops
pip install -r ws-py-requirements.txt
# allow usage of bleeding edge datalad features from datalad-next
git config --global --add datalad.extensions.load.next
```

Beyond Python requirements, you could consider installing [tig](https://jonas.github.io/tig/INSTALL.html), a nice terminal-based viewer for revision history.

### Repository overview for lecturers

**Slides** are written in HTML. Their raw sources can be found in ``html/``.

**Casts** are remotely executed code casts, mostly written with [autorunrecord](https://pypi.org/project/autorunrecord/) in the [book](https://github.com/datalad-handbook/book) itself.

Casts can be executed using the tool ``cast_live`` found in ``tools/`` with the following invocation:

```sh
tools/cast_live casts/<cast-of-your-choice> 
```

``cast_live`` may not work on your system. It has only been used on Linux-based systems so far. Please file an issue if you encounter problems.
A number of casts from previous workshops can be found in ``casts/``. To find out how to create casts on your own machine, check out the [contributing instructions for the book for casts](http://handbook.datalad.org/en/latest/contributing.html#directives), or write them by hand - everything that starts within a ``run '<code here>'`` statement is executed on ``Enter``, everything within a ``say '<note>'`` is written to your private terminal as a note.
Note that ``cast_live`` may configure your keyboard layout to ``en-us``. If you are usually using a different keyboard layout, e.g., German, reset it using ``setxkbmap de``.

## Advice for creating presentations

- ``clone`` the repository to your local computer and ``datalad get`` all subdatasets (``datalad get -n -r .``).
- For simple use cases such as viewing presentations it should suffice to open any raw ``.html`` in a browser of your choice. In this scenario, you *may* be able to generate a PDF from your slides by opening the presentation in a recent version of Chrome or Chromium, and append ``?print-pdf`` to the URL. Afterwards, you may be able to print to PDF from your browser. 
- For more use cases and more reliable PDF exports, use [reveal.js's full setup](https://revealjs.com/installation/#full-setup). This requires a working installation of [Node.js](https://nodejs.org/):
 
```sh
# in the root dataset:
npm install
# to create a local npm server that automatically refreshes presentations
npm start
``` 
- A reliable method to export PDFs from a running npm server is ``decktape``. To generate PDFs from HTML run
```
docker run --rm -t --net=host -v `pwd`:/slides astefanutti/decktape http://localhost:8000/html/<presentation-of-your-choice.html> slides.pdf -s  1024x768
```
- More options, e.g., exports of individual slide screenshots, are in decktape's [documentation](https://github.com/astefanutti/decktape)
- The tool [directpoll](https://directpoll.com/) works fantastic for virtual talks. See [#34](https://github.com/datalad-handbook/course/issues/34) or the template talk for info on how to use it
- We have made good experiences with live code demonstrations. The ``tools/cast_live`` script is used for this. It is highly advised to test whether this script works on your set-up beforehand! 

## License

CC-BY-SA: You are free to

   - share - copy and redistribute the material in any medium or format
   - adapt - remix, transform, and build upon the material for any purpose, even commercially

under the following terms:

   - Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

   - ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

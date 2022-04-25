all: pics

PICS_IGNORE ?= "XXX"

SVGIS=$(shell  find . -iname \*.svgtune | sed -e 's/.svgtune/_tuned/g')

# For every .svg we must have a pdf
PICS=$(shell find . -iname \*svg \
	| sed -e 's/svg/png/g' -e 's/\([^\]\)\([ \t:]\)/\1\\\\\2/g' \
	| grep -v -e $(PICS_IGNORE) )

pics: $(SVGIS) $(PICS)

.PHONY: ignore-%
ignore-%:
	@grep -q "^$*$$" .gitignore || { \
	  echo "$*" >> .gitignore; echo "Ignore $@"; }

#
# SVGTune
#
%_tuned: %.svgtune %.svg
	@echo "Splitting SVG using $<"
# Use gqview to prevew svgs -- quite nice
	@svgtune $<
# Touch it to adjust the timestamp so make does not think that we are
# out of date later on
	@touch "$@"
# And assure that we have ignore ... cannot be in deps since would cause
# regeneration over and over again
	@$(MAKE) ignore-$@

%.png: %.svg ignore-%.png
	@echo "Rendering $@"
	@inkscape -z -f "$<" -e "$@" -d 150

.PHONY: all pics

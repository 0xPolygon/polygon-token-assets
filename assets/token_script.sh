#!/bin/sh
for file in icons/*; do
    filename="$(basename "$file")"
    name="${filename%%.*}"
    echo "'$name'"": {
        symbol:\""${name^^}\"", 
        icon: '$(basename "$file")' 
        },"
done

#!/bin/sh
#!Script to generate token list in terminal. Copy result from terminal and paste it in list file. 

for file in icons/*; do
    filename="$(basename "$file")"
    name="${filename%%.*}"
    echo "'$name'"": {
        symbol:\""${name^^}\"", 
        icon: '$(basename "$file")' 
        },"
done

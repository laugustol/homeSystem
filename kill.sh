sudo kill -9 `ps ax | grep node | grep meteor | grep -v atom | awk '{print $1}'`

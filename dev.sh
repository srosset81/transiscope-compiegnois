function init () {
  rm -rf dev
  git clone https://github.com/assemblee-virtuelle/archipelago dev
  update
}

function update () {
  source .env.local

  if [ -z $ARCHIPELAGO_VERSION ]
  then
    echo "You need to define variable ARCHIPELAGO_VERSION to the working commit or tag in your .env.local file"
    exit 1
  fi

  echo "Archipelago version $ARCHIPELAGO_VERSION"

  cd dev
  git reset --hard HEAD
  git clean -fd
  git fetch
  git checkout --detach $ARCHIPELAGO_VERSION

  cd ..
  cp -R addOn/* dev
  cp .env.local dev/frontend
  cp .env.local dev/middleware

  (cd dev/frontend && yarn)
  (cd dev/middleware && yarn)
}

function sync () {
  cd dev
  git add --all
  git status --porcelain --no-renames | (
    while read line ; do
      trimmed=$(echo $line | sed 's/^ //')
      gitstatus=$(echo $trimmed | cut -d" " -f1)
      filepath=$(echo $trimmed | cut -d" " -f2- | sed 's/^ //')
      case "$gitstatus" in
        'A') mkdir -p ../addOn/$(dirname $filepath) && cp $filepath ../addOn/$filepath ; ;;
        'M') mkdir -p ../addOn/$(dirname $filepath) && cp $filepath ../addOn/$filepath ; ;;
        'D') rm -f ../addOn/$filepath ; ;;
        *) echo "Error: Git status $gitstatus not handled for file $filepath !"
      esac
    done
  )
}

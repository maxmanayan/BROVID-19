# Getting Started (clone from github)
TL;DR need to clone with a unique project name and rename database

1. $ git clone git@github.com:maxmanayan/starter_proj.git <new_proj_name>
2. $ cd <new_proj_name>

3. $ bundle
$ rename database to something unique (use new_proj_name in database `database.yml`)
    - search for `starter_proj` and replace with `<new_proj_name>`
5. $ rails db:create

6. $ cd client
7. $ yarn

## to test
8. $ rails s -p 3001
9. cd client && $ yarn start


## HANDLE GITHUB
TL;DR need to create new repo on github and add remote

two ways do this: 
1. remove remote add new one (easiest, preferred)
    - $ git remote rm origin
    - create a new repo on github
    - $ git remote add origin (new ssh key)
2. remove git repo entirely and recreate a new repo
    - $ rm -rf .git
    - $ git init
    - $ git add .
    - $ git commit -m 'init'
    - $ git remote add origin (new ssh key)
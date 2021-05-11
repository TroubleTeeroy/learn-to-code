# Full-Stack Software Development
**Using Docker, PostgreSQL, Node.js & React**

This is a crash course on full-stack software development intended for beginners. It does not assume any prior
programming experience, but the learner is expected to read beyond this text and experiment in order to fully grasp the
material. Web links are provided throughout to further explain key terms and technologies.

Using this document, the learner will:

----------1. Fork and clone this repository using [Git]
----------1. Install [Docker Desktop] for Windows or Mac
----------1. Install an [IDE] such as [Visual Studio Code] or [WebStorm]
----------1. Run a [PostgreSQL] database server in a [virtual machine] using [Docker Compose]
----------1. Run [PGWeb], a web-based [PostgreSQL] browser, in a [virtual machine] using [Docker Compose]
----------1. Create a database table in [PostgreSQL] using [SQL]
----------1. Install [Node.js] & Node Package Manager ([NPM])
----------1. Initialize a [Node.js] package by creating a [package.json] file
----------1. Install a package as a dependency using [NPM]
----------1. Build a simple [web server] and [REST] endpoint using [Node.js]
1. Write unit tests using [Jest]
1. Create a Linux web server using [Docker] & [Docker Compose]
1. Set up a [reverse proxy server] using [NGINX]
1. Read the contents of a file using [fs.readFile]
1. Install and configure [node-postgres] using [NPM]
1. Create a database migration module using [fs.readFile] and [node-postgres]
1. Create a cryptographic one-way [hash] using [crypto.createHash]
1. Create a Command Line Interface ([CLI]) using [Node.js]
1. Create a Data Access Object ([DAO]) for performing [CRUD] operations
1. Create [REST] endpoints for [user registration] and [authentication]
1. Implement a [session management] strategy using an [HTTP cookie] header
1. Create a user login web page using [HTML] and [CSS]
1. Create a user profile web page that requires [authentication] to access
1. Create a user admin page that requires [authorization] to access

...and more!

## Before we get started...

The material we cover here will get you up and running with the essential tools and foundational knowledge you need to
begin a career as a software developer. It is a hands-on-keyboard tutorial that is meant to be read and acted upon. It
does not attempt to define every term or explain every concept in great depth. Instead, links are provided for you to
drill down to whatever level of detail you like on any given topic.

### Always remember

* Solutions often seem obvious in hindsight. For this reason, it is very easy to get discouraged and convince yourself
  that you are not cut out for this. Every software developer out there has experienced this and (if they are still
  writing code) has had to overcome it. **Be resilient**.


* In the beginning, you need to learn many things in parallel. When you learn to drive a car, you learn to operate the
  machine itself as well as the rules of the road, the physics of objects in motion, the locations and meanings of
  various gauges and controls, and how to anticipate human behavior at high speeds. Eventually, with practice, you can
  just focus on where you are going and how to get there. Learning to code is no different. **Be patient.**


* Read the fucking manual ([RTFM]). The most important thing you can learn is how to find the answers you are looking for
  without asking for help. It's fine to ask for help, especially when you are just getting started, but most of the
  answers you seek are already written down somewhere and, in many cases, they are in the documentation for whatever
  language or library or framework you are using. **Be diligent.**


* When in doubt, write a test. Software developers are experimenters. If you want to understand how something works,
  try it for yourself in a controlled environment. We will cover how to write unit tests and integration tests early on,
  so you can develop this skill throughout the lessons. Do not just assume things will work, even if the documentation
  says they will. **Be certain.**


* Being able to write an application from scratch is great, but navigating a complex and evolving codebase written by
  many people over time, comprehending how its various components interact, identifying and diagnosing bugs,
  understanding business requirements and tradeoffs, surgically resolving issues while minimizing the testing
  surface of your changes... these are the things that separate _software engineers_ from _developers_. Through these
  lessons you will learn how to write an application from scratch. Getting to the next level requires professional
  experience in the industry. **Be humble.**


## 1. Fork and clone this repository using [Git]

[Git] is a Version Control System ([VCS]) that is widely used by software developers. [GitHub] is a popular web service
that provides hosting for public and private [Git] repositories (or "repos"). You can use [Git] without using [GitHub]
(there are other options like [GitLab] or [BitBucket]), but this repo is hosted on [GitHub] so for simplicity it will
be assumed that you are also using [GitHub].

Follow this guide to [setting up Git] on your computer (if necessary), then [fork this repo] to make a copy of it in
your own GitHub account.

Finally, [clone your repo] to download a copy from your GitHub account onto your computer.

In the end, there will be three copies of this repo that concern you:

* `upstream` is the original copy of this repo, hosted at `https://github.com/sscovil/learn-to-code`
* `origin` is your forked copy of this repo, hosted at `https://github.com/your-username/learn-to-code`
* `local` is your cloned copy of this repo, which lives on your computer

The key to understand here is that you have two copies of the original repo and, whenever any of these three copies
(your two copies plus the original) changes, you will need to update the others to keep them all in sync.

If the original `upstream` copy changes after you have forked it, you can [git pull] those changes into your `local`
copy, then [git push] them to your `origin` copy.

If you make a change to your `local` copy, you need to [git add] the changes (which just marks them as 'staged' or
ready to commit), then [git commit] those changes (which actually updates the version history), then finally [git push]
those changes up to your `origin` copy to keep it in sync with your `local` copy.

> **IMPORTANT:** You should commit your code changes early and often. The power of version control is that it enables
> you to go back to previous versions of your code. Throughout this lesson, try and remember to commit your changes and
> push them up to your `origin` copy to keep it in sync.

When you make changes to your repo, you can create a [pull request] to the original `upstream` copy and, if the owner
or maintainer of that repo approves, they will [git merge] your changes (or grant you permission to do so) and, at that
point, all three copies will be in sync. Most [open source] projects will have some sort of guide that explains how to
go about contributing code changes.

For this project, you do not need to worry about making a [pull request]. This tutorial will be used by others, so your
changes will never get merged into the original `upstream` copy. However, you should occasionally [git pull] from the
`upstream master` branch to get the latest changes.

Read this guide to [configure an upstream remote] for your fork, then you can get the latest updates to this document
using the command:

```shell
git pull upstream master
```

There are a ton of resources and tutorials online that explain [Git] in depth. Before going any further, take the time
to wrap your head around how this tool works. It is a critical concept that you need to understand. Learning it later,
while you are trying to learn how to develop software, will make the whole process more stressful.


## 2. Install [Docker Desktop] for Windows or Mac

Before you get started, you will need to install [Docker] on your computer. [Docker] is a tool that enables developers
to run a [virtual machine] (or several VMs) on their computer. This is useful because many people have Windows or MacOS
as an operating system on their computer, but the code they write is often deployed to a server running some flavor of
Linux. Docker enables us to run our software in a local development environment that is identical to production.

* [Install Docker Desktop (MacOS)]
* [Install Docker Desktop (Windows)]

There is a lot to learn about [Docker], but we are only going to cover what you need to know as a software developer to
be productive with it in your local development environment. Feel free to dive deeper if it interests you.


## 3. Install an [IDE] such as [Visual Studio Code] or [WebStorm]

You will want to install an Integrated Development Environment ([IDE]), which is an application used by software
developers to write code more efficiently. You can write code in a plain old text editor if you prefer, just like you
can build a house with a hammer and hand saw, but if you are serious about becoming a software developer you should
learn the tools of the trade.

[Visual Studio Code] is free and very popular among web developers. I personally use [IntelliJ], which is a bit pricey
but has plugins for every programming language. [WebStorm] is made by the same company (JetBrains), but it only supports
[JavaScript] and frameworks like [Node.js], [React], and [Vue.js].


## 4. Run a [PostgreSQL] database server in a virtual machine using [Docker Compose]

Once you have [Git], [Docker Desktop], and your preferred [IDE] installed, and you have forked this repo and cloned a
copy of it on your computer, start your [IDE] and open the `learn-to-code` folder. This will be referred to as your
**project folder** going forward. The code you write throughout this tutorial will live in your project folder.

Start by creating a new file called `docker-compose.yml` and, in that file, copy/paste the following:

```yaml
version: "3.7"

services:
  database:
    image: postgres:13-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=mydbuser
      - POSTGRES_PASSWORD=mydbpassword
      - POSTGRES_DB=mydbname
    healthcheck:
      test: pg_isready -U mydbuser
      interval: 5s
      retries: 10
      timeout: 5s
    ports:
      - "5432:5432"
```

This is a [Docker Compose] configuration file that uses a format called [YAML] and describes a [virtual machine] we
want to create. Our VM will use an image called [postgres:13-alpine] which is essentially a snapshot of an
[Alpine Linux] operating system with [PostgreSQL] v13 already installed on it for us.

Next, open the [Integrated Terminal (VSCode)] or [Terminal Emulator (WebStorm)] and start up your virtual PostgreSQL
server by running the following command:

```shell
docker-compose up -d
```

The [docker-compose up] command brings up any and all services defined in `docker-compose.yml`. The `-d` flag causes
these services to run in 'detached mode', which just means they run in the background. If you omit `-d` it will still
run, but you will not be able to use your terminal to run any other commands and closing the terminal will stop any
docker containers that were started.

The first time you run [docker-compose up] it will download a [postgres:13-alpine] image file, which may take a few
minutes. Once it has finished, your database server will be up and running and listening on port `5432`. You can
confirm this by running the following command in the terminal:

```shell
docker-compose ps
```

...and you should see:

```shell
          Name                        Command                 State               Ports         
------------------------------------------------------------------------------------------------
learn-to-code_database_1   docker-entrypoint.sh postgres   Up (healthy)   0.0.0.0:5432->5432/tcp
```

If, after running `docker-compose up -d`, you encounter an error like this:

```shell
ERROR: for learn-to-code_database_1  Cannot start service database: driver failed programming external connectivity on
endpoint learn-to-code_database_1 (...): Bind for 0.0.0.0:5432 failed: port is already allocated
```

...it means you already have a program running on your computer (maybe another instance of PostgreSQL?) that is using
port `5432`. In this case, you can either shut down the other program (if you know how and if it is safe to do so), or
you can modify the [docker-compose ports config] in your `docker-compose.yml` file:

```yaml
    ports:
      - "9999:5432"
```

In this case, you are telling your computer (referred to as the 'host') to listen on port `9999` and forward any
requests it receives to your virtual database server (referred to as the 'container'), which is listening on its port
`5432` (the default port used by [PostgreSQL]).

### Helpful [docker-compose] commands

To stop your running containers without removing them, use:

```shell
docker-compose stop
```

You can start them up again using:

```shell
docker-compose start
```

The `start` and `stop` commands are equivalent to turning your virtual machines on and off. When you start them up
again, they will be in the same state they were in when you turned them off.

Sometimes you will want to completely destroy your containers. To do this, use:

```shell
docker-compose down
```

You can always create new instances of your containers by running:

```shell
docker-compose up -d
```

If you ever want to see the logs for a container, use:

```shell
docker-compose logs database
```

Running that command, you should see output like this:

```shell
Attaching to learn-to-code_database_1
database_1  | The files belonging to this database system will be owned by user "postgres".
database_1  | This user must also own the server process.
database_1  | 
database_1  | The database cluster will be initialized with locale "en_US.utf8".
database_1  | The default database encoding has accordingly been set to "UTF8".
database_1  | The default text search configuration will be set to "english".
database_1  | 
database_1  | Data page checksums are disabled.
database_1  | 
database_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
database_1  | creating subdirectories ... ok
database_1  | selecting dynamic shared memory implementation ... posix
database_1  | selecting default max_connections ... 100
database_1  | selecting default shared_buffers ... 128MB
database_1  | selecting default time zone ... UTC
database_1  | creating configuration files ... ok
database_1  | running bootstrap script ... ok
database_1  | sh: locale: not found
database_1  | 2021-05-02 13:26:50.561 UTC [30] WARNING:  no usable system locales were found
database_1  | performing post-bootstrap initialization ... ok
database_1  | syncing data to disk ... ok
database_1  | 
database_1  | initdb: warning: enabling "trust" authentication for local connections
database_1  | You can change this by editing pg_hba.conf or using the option -A, or
database_1  | --auth-local and --auth-host, the next time you run initdb.
database_1  | 
database_1  | Success. You can now start the database server using:
database_1  | 
database_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
database_1  | 
database_1  | waiting for server to start....2021-05-02 13:26:51.020 UTC [35] LOG:  starting PostgreSQL 13.2 on aarch64-unknown-linux-musl, compiled by gcc (Alpine 10.2.1_pre1) 10.2.1 20201203, 64-bit
database_1  | 2021-05-02 13:26:51.021 UTC [35] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
database_1  | 2021-05-02 13:26:51.024 UTC [36] LOG:  database system was shut down at 2021-05-02 13:26:50 UTC
database_1  | 2021-05-02 13:26:51.025 UTC [35] LOG:  database system is ready to accept connections
database_1  |  done
database_1  | server started
database_1  | CREATE DATABASE
database_1  | 
database_1  | 
database_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
database_1  | 
database_1  | waiting for server to shut down....2021-05-02 13:26:51.186 UTC [35] LOG:  received fast shutdown request
database_1  | 2021-05-02 13:26:51.187 UTC [35] LOG:  aborting any active transactions
database_1  | 2021-05-02 13:26:51.187 UTC [35] LOG:  background worker "logical replication launcher" (PID 42) exited with exit code 1
database_1  | 2021-05-02 13:26:51.187 UTC [37] LOG:  shutting down
database_1  | 2021-05-02 13:26:51.194 UTC [35] LOG:  database system is shut down
database_1  |  done
database_1  | server stopped
database_1  | 
database_1  | PostgreSQL init process complete; ready for start up.
database_1  | 
database_1  | 2021-05-02 13:26:51.300 UTC [1] LOG:  starting PostgreSQL 13.2 on aarch64-unknown-linux-musl, compiled by gcc (Alpine 10.2.1_pre1) 10.2.1 20201203, 64-bit
database_1  | 2021-05-02 13:26:51.300 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
database_1  | 2021-05-02 13:26:51.300 UTC [1] LOG:  listening on IPv6 address "::", port 5432
database_1  | 2021-05-02 13:26:51.301 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
database_1  | 2021-05-02 13:26:51.304 UTC [49] LOG:  database system was shut down at 2021-05-02 13:26:51 UTC
database_1  | 2021-05-02 13:26:51.305 UTC [1] LOG:  database system is ready to accept connections
```

When a container is unhealthy or not working correctly, checking the logs should be one of the first things you do.

If you ever want to run a command from the terminal inside a container, use something like:

```shell
docker-compose exec database /bin/sh
```

This example transports you inside the [Alpine Linux] operating system of your `database` container by running
`/bin/sh`, a Command Line Interface ([CLI]) that uses the [shell] scripting language. You can then navigate the file
system and run commands as if you were using the [virtual machine].

To exit the [shell] and return to your host computer's terminal, use:

```shell
exit
```

Finally, when we create our own [Docker] service later on, any time you change the service’s [Dockerfile] or the
contents of its build directory, you will need to run:

```shell
docker-compose build
```

For now, you do not need to worry about building a [Docker] service. That will be covered in detail later. 


## 5. Run [PGWeb], a web-based [PostgreSQL] browser, in a [virtual machine] using [Docker Compose]

Now that you have a database container up and running, you should be wondering: "How do I use it?"

There are a few different ways to connect to a remote database server. There is a Command Line Interface ([CLI])
program called [psql], for example, as well as a [Node.js] library we will install later called [node-postgres]. There
is also a program you can run in your web browser called [PGWeb] that has a nice Graphical User Interface ([GUI]).

Let's install [PGWeb] by adding another [Docker] container to our `docker-compose.yml` file:

```yaml
  pgweb:
    image: sosedoff/pgweb
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgres://mydbuser:mydbpassword@database:5432/mydbname?sslmode=disable
    ports:
      - "8081:8081"
    links:
      - database:database
```

Be sure the indentation is correct! Indentation has meaning in [YAML] files. The service name `pgweb` should be at the
same indentation level as `database` and one level deeper than `services`.

Putting it all together, your `docker-compose.yml` file should now look like this:

```yaml
version: "3.7"

services:
  database:
    image: postgres:13-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=mydbuser
      - POSTGRES_PASSWORD=mydbpassword
      - POSTGRES_DB=mydbname
    healthcheck:
      test: pg_isready -U mydbuser
      interval: 5s
      retries: 10
      timeout: 5s
    ports:
      - "5432:5432"

  pgweb:
    image: sosedoff/pgweb
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgres://mydbuser:mydbpassword@database:5432/mydbname?sslmode=disable
    ports:
      - "8081:8081"
    links:
      - database:database
```

The [PGWeb] container is created using an image called [sosedoff/pgweb]. Like [postgres:13-alpine], this image is a
snapshot of an [Alpine Linux] operating system with a program (in this case, [PGWeb]) already installed on it.

One thing to pay attention to here is the [docker-compose environment config]:

```yaml
    environment:
      - DATABASE_URL=postgres://mydbuser:mydbpassword@database:5432/mydbname?sslmode=disable
```

Here, we are setting the `DATABASE_URL` [environment variable] to something that looks like a URL. This is a
[libpq connection URI] used by [PGWeb] to connect to the instance of [PostgreSQL] running in our `database` container.

If you look closely at the `DATABASE_URL`, you will see the following parts that correspond to [environment variable]
and other settings in the `database` service configuration:

* `mydbuser` should match the value of the `POSTGRES_USER` environment variable
* `mydbpassword` should match the value of the `POSTGRES_PASSWORD` environment variable
* `database` should match the name of the container that uses the [postgres:13-alpine] image
* `5432` should match the database container host port
* `mydbname` should match the value of the `POSTGRES_DB` environment variable

> **NOTE:** If you had to change the host port of your database container due to the default port `5432` already being
> in use by another program, be sure to use the same port in the `DATABASE_URL` for the [PGWeb] container.

To start this new container, run the same command as before:

```shell
docker-compose up -d
```

Now if you run `docker-compose ps`, you should see:

```shell
          Name                        Command                  State               Ports         
-------------------------------------------------------------------------------------------------
learn-to-code_database_1   docker-entrypoint.sh postgres    Up (healthy)   0.0.0.0:5432->5432/tcp
learn-to-code_pgweb_1      /usr/bin/pgweb --bind=0.0. ...   Up             0.0.0.0:8081->8081/tcp
```

Notice the [docker-compose ports config] for this container is set to `8081:8081`, meaning any request to port `8081`
on your local 'host' computer will be forwarded to port `8081` on the virtual web server running in this container.

Now open your favorite web browser and make a request to port `8081` by visiting:

http://localhost:8081

If everything is configured correctly, you should see the [PGWeb] interface.

![Screenshot of PGWeb Query tab](/docs/screenshot-pgweb-query-tab.png)


## 6. Create a database table in [PostgreSQL] using [SQL]

With [PGWeb] open in your web browser, click the `Query` tab and paste the following [SQL] query into the text area:

```postgresql
CREATE TABLE IF NOT EXISTS users (
    id            SERIAL PRIMARY KEY,
    username      TEXT UNIQUE NOT NULL,
    password_hash TEXT UNIQUE NOT NULL,
    salt          TEXT UNIQUE NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT now(),
    updated_at    TIMESTAMP
);
```

...and then click the `Run Query` button.

Two things should have happened: Below the `Run Query` button it should say "No records found", and in the navigation
menu on the left side of the screen, under `Tables`, you should now see a link to the newly created `users` table.

Clicking on the `users` table in the side nav menu will open up the `Rows` tab. Again, you will see the message "No
records found" because no records have been inserted into that table yet.

Now click on the `Structure` tab, and you will see a table with information describing the table schema defined in the
[CREATE TABLE] query above.

![Screenshot of PGWeb users table Structure Tab](/docs/screenshot-pgweb-users-structure-tab.png)

Let's break down that [SQL] query line by line.

```postgresql
CREATE TABLE IF NOT EXISTS users (
```

The first line should be fairly self-evident. It instructs [PostgreSQL] to create a new database table called `users`
only if that table does not already exist. If you run the query again from the `Query` tab, nothing will happen. If you
remove the `IF NOT EXISTS` clause, it will raise an error: `pq: relation "users" already exists`.

```postgresql
CREATE TABLE IF NOT EXISTS users (
    id            SERIAL PRIMARY KEY,
```

The second line states that the `users` table should have a column called `id`. This column uses the [SERIAL] data type,
which means the value must be an [INTEGER] that is [NOT NULL] and will be assigned an auto-incrementing [DEFAULT] value
that is derived from a [sequence generator] (in this case, `users_id_seq`). It will also serve as the [PRIMARY KEY] for
this table, which means it must be [UNIQUE] and [NOT NULL].

As a general rule for any [relational database], every table should have a [PRIMARY KEY].

```postgresql
CREATE TABLE IF NOT EXISTS users (
    id            SERIAL PRIMARY KEY,
    username      TEXT UNIQUE NOT NULL,
```

The third line specifies a column called `username`. Data in this column must be of the [TEXT] data type. Although this
is not the [PRIMARY KEY], it does have the same [UNIQUE] and [NOT NULL] constraints.

If you attempt to [INSERT] two records with the same `username` value, the second attempt would raise an error: `pq: 
duplicate key value violates unique constraint "users_username_key"`.

```postgresql
CREATE TABLE IF NOT EXISTS users (
    id            SERIAL PRIMARY KEY,
    username      TEXT UNIQUE NOT NULL,
    password_hash TEXT UNIQUE NOT NULL,
```

The fourth line adds another [TEXT] column called `password_hash` with [UNIQUE] and [NOT NULL] constraints. This column
will be used to store a cryptographic [hash] of the user's password, which will be explained later.

```postgresql
CREATE TABLE IF NOT EXISTS users (
    id            SERIAL PRIMARY KEY,
    username      TEXT UNIQUE NOT NULL,
    password_hash TEXT UNIQUE NOT NULL,
    salt          TEXT UNIQUE NOT NULL,
```

The fifth line adds yet another [TEXT] column called `salt` with [UNIQUE] and [NOT NULL] constraints. The value stored
in this column will be a Universally Unique Identifier ([UUID]) and will be combined with the user's password to
generate a unique cryptographic [hash]. Again, this will be explained in greater detail later.

```postgresql
CREATE TABLE IF NOT EXISTS users (
    id            SERIAL PRIMARY KEY,
    username      TEXT UNIQUE NOT NULL,
    password_hash TEXT UNIQUE NOT NULL,
    salt          TEXT UNIQUE NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT now(),
    updated_at    TIMESTAMP
);
```

The last two lines add [TIMESTAMP] columns called `created_at` and `updated_at`. You will notice that `created_at` has
a [NOT NULL] constraint as well as a [DEFAULT] value. This means that, if you [INSERT] a row without specifying a
`created_at` value, a timestamp for the current date and time will be assigned by the built-in [now()] function.

The `updated_at` column has no constraints, meaning it will be set to `NULL` by default. If we want to get clever, we
can make it so that any time we [UPDATE] a row, a timestamp for the current date and time automatically gets assigned by
the built-in [now()] function as well. However, that requires adding a [trigger function].

```postgresql
CREATE OR REPLACE FUNCTION users_table_but()
    RETURNS TRIGGER
    SET SCHEMA 'public'
    LANGUAGE plpgsql
    SET search_path = public
    AS '
    BEGIN
        NEW.updated_at := now();
        RETURN NEW;
    END;
    ';

CREATE TRIGGER users_table_but
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE PROCEDURE users_table_but();
```

There is a lot to unpack there, but essentially this [SQL] query creates a custom function in [PostgreSQL] called
`users_table_but` (the `but` suffix being an acronym for `before update trigger`) that intercepts all [UPDATE] queries
on the `users` table and sets the new `updated_at` column value to [now()].

Now that we have our database table created, let's [INSERT] some records into it.

```postgresql
INSERT INTO users (username, password_hash, salt) VALUES
    ('alice', 'foo', 'xxx'),
    ('bob', 'bar', 'yyy'),
    ('carol', 'baz', 'zzz');
```

Now let's [UPDATE] a record and confirm that the `updated_at` column automatically gets assigned a value.

```postgresql
UPDATE users SET username='candice' WHERE username='carol';
```

Finally, let's [DELETE] a row.

```postgresql
DELETE FROM users WHERE username='alice';
```

Keep in mind that if you destroy your [Docker] `database` container using `docker-compose down`, any tables you created
and any data you added will be lost. We will address that later when we create a [database migration] utility.


## 7. Install [Node.js] & Node Package Manager ([NPM])

Now that you have a [PostgreSQL] database server and a nice [GUI] web app to interact with your database, let's get
ready to write some actual code. We will begin with [Node.js], a server-side [JavaScript] framework.

Like any framework, [Node.js] is a collection of libraries that abstract away a lot of core functionality commonly
required to build an application. For example, [Node.js http] provides interfaces that are designed to support many
features of the [HTTP] protocol that can be difficult to work with, like large, possibly chunk-encoded, messages.

By using a well-supported open source framework like [Node.js], we are free to focus on the requirements of the
application we want to build instead of having to solve a bunch of problems that other engineers have already solved.

You could [install Node.js] by choosing a specific version and downloading the installer from their website, but I
recommend using a version manager instead. If you are on MacOS or Linux, try Node Version Manager ([NVM]); otherwise,
there is a similar tool called [Node Version Manager for Windows]. A version manager makes it easy to quickly install
any version of [Node.js] and switch between them as needed when working on multiple projects.

Whichever method you choose, install [Node.js] v14.x which is the current Long Term Support ([LTS]) version at the time
of this writing. Doing so will also automatically install Node Package Manager ([NPM]) v6.x, which will be used to
install other libraries we will use.

> **NOTE:** If you are using [WebStorm] or [IntelliJ], you will want to [enable coding assistance for Node.js].

### About version numbers

You will often see software version numbers like `14.16.1`, `14.x`, or `>=14` and you may be confused by it. Most modern
frameworks and libraries use a version format standard known as [semantic versioning], sometimes abbreviated 'semver',
where the numbers represent `major.minor.patch` releases. Bug fixes that do not affect the way the software is used will
increment the `patch` version. Backwards-compatible additions and changes will increment the `minor` version.
Backwards-incompatible or breaking changes will increment the major version.

This is important to consider when upgrading the frameworks or libraries you use in your applications. If your
application was written for [Node.js] v14.x, it should continue to work with any `minor` or `patch` version upgrade, but
there is a chance something will break with a `major` version upgrade. Reliable frameworks and libraries will maintain
a detailed [changelog] (ex: [Node.js changelog]).

It is also important to be sure you are reading the documentation for the correct version of any software you are using.
If you are reading the docs for a newer version of a library than the one you have installed, you will spend a lot of
time scratching your head and feel very silly when you figure out what went wrong. Trust me. 🤦


## 8. Initialize a [Node.js] package by creating a [package.json] file

With [Node.js] and [NPM] installed, let's initialize our application by creating a [package.json] file. [NPM] actually
provides a [CLI] that walks you through the process.

From the terminal, in your project folder, run:

```shell
npm init
```

...then fill in the information you are prompted for. Default values appear inside parentheses; to use them, just hit
enter. For example:

```shell
package name: (learn-to-code) 
version: (1.0.0) 
description: A crash course on full-stack software development with Docker, PostgreSQL, Node.js & React
entry point: (index.js) 
test command: jest
git repository: (https://github.com/sscovil/learn-to-code.git) 
keywords: docker,postgres,node,react,tutorial
author: Shaun Scovil <sscovil@gmail.com>
license: (ISC) UNLICENSED
```

Here, the default values for `name`, `version`, `entry point`, and `git repository` were used, but the other fields were
filled in. The [CLI] then generated the following [package.json] file:

```json
{
  "name": "learn-to-code",
  "version": "1.0.0",
  "description": "A crash course on full-stack software development with Docker, PostgreSQL, Node.js & React",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sscovil/learn-to-code.git"
  },
  "keywords": [
    "docker",
    "postgres",
    "node",
    "react",
    "tutorial"
  ],
  "author": "Shaun Scovil <sscovil@gmail.com>",
  "license": "UNLICENSED",
  "bugs": {
    "url": "https://github.com/sscovil/learn-to-code/issues"
  },
  "homepage": "https://github.com/sscovil/learn-to-code#readme"
}
```

A lot of this information really only matters if you publish your code on [npmjs.com], which you would only do if you
wanted to turn your project into an [open source] library for other developers to use. Every time you install a
dependency using [npm install], you are using code that someone else published to [npmjs.com].

We will not be building anything that you would publish to [npmjs.com], but we will be installing a few libraries as
dependencies for our application. For this reason, we need a [package.json] file.

### JSON vs. YAML

Earlier, we created a configuration file called `docker-compose.yml` that uses the [YAML] format. Now we have created a
configuration file called `package.json` that uses the [JSON] format. Both of these formats are standard ways to
describe data that is recognizable to most programming languages. The syntax is different, but they are effectively the
same thing. The correct format to use is determined by the software that will read the data. [Docker Compose] uses
[YAML], but most [JavaScript] applications use [JSON].


## 9. Install a package as a dependency using [NPM]

Now that we have initialized our [Node.js] application with a [package.json] file, we can install [dependencies]. A
dependency is a piece of software, usually written and maintained by someone else, that your code requires in order to
function in some way.

You can find libraries on [npmjs.com] that do just about everything, but anyone with an Internet connection and a pulse
can create and publish [Node packages] so you should be very selective about the packages you incorporate into your
project.

In general, you should:

* only add dependencies that provide functionality you absolutely need
* only choose packages that are actively maintained by professionals
* avoid dependencies for trivial code that is easy to write and maintain

One good example of a dependency you should include in your project is a testing framework like [Jest], [Mocha], or
[Jasmine]. You could test your code without a framework, using the built-in [Node.js assert] library or whatever, but
you will quickly find yourself spending more time writing complicated test functions than actual code or, worse, not
writing tests at all.

I highly recommend using [Jest] because it requires no configuration, offers a lot of really useful features, and is
actively maintained by Facebook and a huge community of contributors.

Let's install [Jest] as a development dependency. In the terminal, from the project folder, run:

```shell
npm install -D jest
```

The `-D` flag indicates that this is a _development dependency_, meaning it is not required to run the application in
production. Normally, you set up your code deployment pipeline so that tests are run automatically and must pass before
any code is deployed to production.

If you open your [package.json] file, you should see a `devDependencies` section has been added to the bottom:

```json
{
  "name": "learn-to-code",
  "version": "1.0.0",
  "description": "A crash course on full-stack software development with Docker, PostgreSQL, Node.js & React",
  "type": "module",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sscovil/learn-to-code.git"
  },
  "keywords": [
    "docker",
    "postgres",
    "node",
    "react",
    "tutorial"
  ],
  "author": "Shaun Scovil <sscovil@gmail.com>",
  "license": "UNLICENSED",
  "bugs": {
    "url": "https://github.com/sscovil/learn-to-code/issues"
  },
  "homepage": "https://github.com/sscovil/learn-to-code#readme",
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```

The `^` before the version number means that any `minor` or `patch` release greater than the version specified is
acceptable. See the [About version numbers](#about-version-numbers) section above for more about [semantic versioning].

You will also notice a new directory in your project folder called [node_modules]. If you look inside that directory,
you may be shocked to see an insane number of subdirectories, despite you having only installed one single dependency.
This is because [Jest] itself has dependencies, and many of those packages have dependencies, and so on. This is why
we need a package manager like [NPM] to manage downloading these things for us.

If you were paying attention earlier, you will recall that I said "you should be very selective about the packages you
incorporate into your project." Any package you include is a potential bug or security vulnerability you may be exposed
to. Of course, your own code is subject to those same risks, and an open source project actively maintained by a
community of developers is arguably more resilient than a library you build by yourself.

Here are some ways you can mitigate dependency risk:

* Run [npm audit] to scan your project for vulnerabilities & automatically install compatible updates
* Set up [GitHub Dependabot] to scan your repository for known security vulnerabilities
* Keep your code up to date and pay attention to release schedules for any packages you rely on


## 10. Build a simple [web server] and [REST] endpoint using [Node.js]

Up to this point, almost everything we have done has been to set up our local development environment and configure the
database and tools we will use to build our application. Now we are ready to start writing some code.

The first thing we will build is a simple [web server]. To keep our code organized, we will create a directory in our
project folder called `src` (a standard abbreviation for 'source', as in [source code]).

You can create the directory in your [IDE] from the `File` menu, or from the terminal using the command:

```shell
mkdir src
```

Then, inside the `src` directory, create a file called `server.js`. Again, you can do this from the [IDE] `File` menu,
or from the terminal using:

```
echo > src/server.js
```

If you are creating `server.js` using the [IDE] `File` menu, just be sure it ends up inside the `src` directory and not
alongside it in the root directory. Your project folder should look like this:

```
learn-to-code/
├─ node_modules/
├─ src/
│  └─ server.js
├─ .gitignore
├─ docker-compose.yml
├─ package.json
├─ package-lock.json
└─ README.md
```

Open `server.js` in your [IDE] and paste in the following code:

```javascript
const http = require('http')

const host = process.env.APP_HOST || 'localhost'
const port = process.env.APP_PORT || 8080

const router = async (req, res) => {
    let body
    let code

    if ('/ping' === req.url) {
        body = {status: 'healthy'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }

    res.setHeader('Content-Type', 'application/json')
    res.writeHead(code)
    res.end(JSON.stringify(body))
}

const server = http.createServer(router)

server.on('listening', () => {
    console.log(`Server listening at http://${host}:${port}`)
})

try {
    server.listen(port, host)
} catch(err) {
    console.error(err, 'Error starting server')
}
```

There is a lot going on here, so let's break it down.

```javascript
const http = require('http')
```

At the top of the file, we import the [Node.js http] module and assign it to a constant (or [const]) called `http`.
Although the module is called 'http', we could just as easily name our constant something else, like `h` or `foo`, and
it would work the same way. Think of these names as aliases we assign to data, [objects] or [functions].

```javascript
const host = process.env.APP_HOST || 'localhost'
const port = process.env.APP_PORT || 8080
```

Here, we declare two more constants: `host` and `port`. This time, instead of importing their values from a module, we
assign them each the value of an [environment variable] (`APP_HOST` and `APP_PORT`, respectively). We also use the
[logical OR] operator `||` to assign default values, in case the environment variables are [undefined].

```javascript
const router = async (req, res) => {
    let body
    let code

    if ('/ping' === req.url) {
        body = {status: 'healthy'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }

    res.setHeader('Content-Type', 'application/json')
    res.writeHead(code)
    res.end(JSON.stringify(body))
}
```

Here, we declare a constant called `router` and define it as an [async function] (more on this later) using an
[arrow function] expression. This function accepts two arguments, `req` and `res`, which are abbreviations for 'request'
(an [http.IncomingMessage] object) and 'response' (an [http.ServerResponse] object).

Let's examine the code inside the `router` function...

```javascript
    let body
    let code
```

The `router` function starts by declaring two variables using the [let] statement, which differs from [const] in that
the value of a [const] cannot be changed (thus it is constant). Since we will assign different values to the `body` and
`code` variables based on [conditional logic], we declare them using [let].

```javascript
    if ('/ping' === req.url) {
        body = {status: 'healthy'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }
```

Using an [if...else] statement, we compare the [string] value `'/ping'` to the value of [req.url] which, as the name
implies, is the requested URL path. If our web server is listening at http://localhost:8080 and someone visits the URL
http://localhost:8080/ping then the value of `req.url` would be `'/ping'` and this condition would be true.

```javascript
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(code)
    res.end(JSON.stringify(body))
```

Then we call some [http.ServerResponse] functions: [setHeader], [writeHead], and [end].

* `res.setHeader` is used to set the [Content-Type] response header, indicating that the [response body] will be in
  [JSON] format.
* `res.writeHead` sends a [response header] to the request with a 3-digit HTTP status code, like `200` (Success) or 
  `404` (Not Found).
* `res.end` sends our `body` object, which we convert to a [JSON] string using [JSON.stringify], then signals to the
  server that all response headers and body have been sent and that the server should consider this request complete.

The `router` function will serve as a _request listener_, meaning it will be called whenever our [http.Server] receives
an HTTP request.

```javascript
const server = http.createServer(router)
```

Here, we pass the `router` function as a request listener to the [http.createServer] function which, as you may have
guessed, creates an [http.Server] object. We assign that object to a constant called `server`.

Our `server` object is an instance of the [http.Server] class, which is a type of [EventEmitter]. This means that it
will emit events whenever certain things happen. It also means that you can instruct `server` to listen for certain
events and, when they occur, run a function (called an _event handler_) to perform a desired action.

```javascript
server.on('listening', () => {
    console.log(`Server listening at http://${host}:${port}`)
})
```

Here we call the [server.on] function and pass it an event handler. When the server begins listening for incoming
requests, it emits a [listening] event that triggers our event handler, which then calls [console.log] and logs a
message informing us that the server is ready.

```javascript
try {
    server.listen(port, host)
} catch(err) {
    console.error(err, 'Error starting server')
}
```

Finally, we call the [server.listen] function with the `port` and `host` constants we defined earlier. If successful,
it will emit the [listening] event and trigger our event handler. However, if it throws an error, our [try...catch]
statement will catch the error and call [console.error] to log the error details and inform us what went wrong.

### Run your Node.js application

To run your web server, open the terminal and run the following command from your project folder:

```shell
node src/server.js
```

You should see the success message from your [listening] event handler:

```shell
Server listening at http://localhost:8080
```

If you see this error instead:

```shell
Error: listen EADDRINUSE: address already in use 127.0.0.1:8080
    at Server.setupListenHandle [as _listen2] (net.js:1318:16)
    at listenInCluster (net.js:1366:12)
    at GetAddrInfoReqWrap.doListen [as callback] (net.js:1503:7)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:69:8)
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1345:8)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '127.0.0.1',
  port: 8080
}
```

...that means some other program is already listening on port `8080`. You can stop the other program (if you know how
and if it is safe to do so), or you can change the `port` by setting the `APP_PORT` [environment variable]:

```shell
APP_PORT=9000 node src/server.js
```

On Windows, which uses [PowerShell], you need to add `$env:` before the environment variable name:

```shell
$env:APP_PORT=9000 node src/server.js
```

When your server is listening, visit http://localhost:8080 in your web browser. You will see:

```json
{"error":"Resource not found"}
```

This is the `404` error response we defined in the `router` that gets returned for all URL paths except `/ping`.

If you visit http://localhost:8080/ping you will see:

```json
{"status":"healthy"}
```

Congratulations! You just built a [web server]. Pretty soon, we'll make it do something useful.

### Running and debugging Node.js in your IDE

Going back to the terminal, you will notice that hitting enter does not run any commands you type. This is because the
terminal is busy running your server, similar to when you run `docker-compose up` without the `-d` flag. In order to
get your terminal back, you need to press `CTRL+C` to stop the server.

Your [IDE] also provides a way to run (and debug) your application without using the terminal. Take some time to
familiarize yourself with this feature. In particular, learn how the debugger works. It will become one of your most
important tools.

* [Visual Studio Code: Node.js debugging]
* [WebStorm: Running and debugging Node.js]


## 11. Write unit tests using [Jest]

After we created a web server, we opened a web browser and tested it by visiting http://localhost:8080 and
http://localhost:8080/ping. Why did we do that?

We did it because we wanted to be sure our code worked.

The way we did it is known as [manual testing]. It is very unreliable and inefficient. It is unreliable because it
requires humans and humans are inconsistent. It is inefficient because it requires humans and humans are slow. Humans
are the common denominator here. Machines are way better at this sort of thing. If you disagree, software development
might not be the best career choice for you. :-)

Let's write some automated tests, so we can deploy our code with confidence (and without those pesky humans).

First, make sure you have installed [Jest] using `npm install -D jest` and verify that the test script in your
[package.json] file runs the `jest` command:

```json
{
  "name": "learn-to-code",
  "version": "1.0.0",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```

In the `src` directory, alongside `server.js`, create a new file called `server.test.js`. Your project folder should
now look like this:

```
learn-to-code/
├─ node_modules/
├─ src/
│  ├─ server.js
│  └─ server.test.js
├─ .gitignore
├─ docker-compose.yml
├─ package.json
├─ package-lock.json
└─ README.md
```

Open `server.test.js` and paste in the following code:

```javascript
describe('router', () => {
  test('is a function', () => {
    expect(typeof router === 'function').toBe(true)
  })
})
```

Now open your terminal and run:

```shell
npm test
```

You should see something like this:

```shell
> learn-to-code@1.0.0 test /path/to/repo/learn-to-code
> jest

 FAIL  src/server.test.js
  router
    ✕ is a function (2 ms)

  ● router › is a function

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      1 | test('is a function', () => {
    > 2 |     expect(typeof router === 'function').toBe(true)
        |                                          ^
      3 | })
      4 |

      at Object.<anonymous> (src/server.test.js:2:42)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.608 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```

This means our testing framework is working, but our test is failing. It is failing because `router` is undefined,
because we did not import it from `server.js`.

Add the following line to the top of `server.test.js`:

```javascript
const router = require('./server')
```

Then open `server.js` and add the following line to the bottom of the file:

```javascript
module.exports = router
```

Now our `server.js` module exports the `router` function, and our `server.test.js` module imports it.

Running `npm test` again, you should see something like this:

```shell
> learn-to-code@1.0.0 test /path/to/repo/learn-to-code
> jest

 PASS  src/server.test.js
  router
    ✓ is a function (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.611 s, estimated 1 s
Ran all test suites.

  ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
    Attempted to log "Server listening at http://localhost:8080".

      27 | })
      28 |
    > 29 | try {
         |           ^
      30 |     server.listen(port, host)
      31 | } catch(err) {
      32 |     console.error(err, 'Error starting server')

      at console.log (node_modules/@jest/console/build/CustomConsole.js:185:10)
      at Server.<anonymous> (src/server.js:29:11)

Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

This time, our test passed. However, when we imported `server.js` all of the code in that module got executed, including
the bit that starts the web server. [Jest] ran the tests but could not exit, and the server is still running.

Hit `CTRL+C` to stop the server and get your terminal back.

In order to fix this, we are going to have to [refactor] `server.js`. We still want it to start listening when we run
it, but we also need to make sure it is testable. One way to do that is to change this:

```javascript
try {
    server.listen(port, host)
} catch(err) {
    console.error(err, 'Error starting server')
}
```

...to this:

```javascript
if (require.main === module) {
    try {
        server.listen(port, host)
    } catch(err) {
        console.error(err, 'Error starting server')
    }
}
```

By wrapping the code that starts the server in [conditional logic] that checks if `server.js` is the [main module], we
can ensure it is only executed when `node src/server.js` is run and not when `server.js` is imported by another module.

Now when you run `npm test`, you should see:

```shell
> learn-to-code@1.0.0 test /path/to/repo/learn-to-code
> jest

 PASS  src/server.test.js
  router
    ✓ is a function (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.61 s, estimated 1 s
Ran all test suites.
```

### Add code coverage

Any non-trivial piece of software will have several code paths. Every [if...else] statement creates a fork in the road,
where one path becomes two. As the code becomes more complex, two becomes four, four becomes eight, and so on. At some
stage, [manual testing] of all possible code paths becomes infeasible.

Automated tests, on the other hand, can be used to maintain high [code coverage] as complexity increases, reducing the
risk of [bugs] going undetected. Well-written tests can also serve as a form of documentation, explaining by example
how the software is intended to work.

Let's add some more tests. We can go through them in detail and learn a lot along the way.

Open `server.test.js` and replace what is in there with the following code, which includes the test we already wrote:

```javascript
const http = require('http')

const router = require('./server')

describe('router', () => {
  let req
  let res

  beforeEach(() => {
    req = new http.IncomingMessage()
    res = new http.ServerResponse(req)
    res.setHeader = jest.fn()
    res.writeHead = jest.fn()
    res.end = jest.fn()
  })

  test('is a function', () => {
    expect(typeof router === 'function').toBe(true)
  })

  describe('receives a request for an unsupported URL path', () => {
    beforeEach(() => {
      req.url = '/invalid-url-path'
    })

    test('sets Content-Type header', async () => {
      await router(req, res)
      expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
    })

    test('responds with 404 status code', async () => {
      await router(req, res)
      expect(res.writeHead).toHaveBeenCalledWith(404)
    })

    test('responds with a JSON string in the body', async () => {
      await router(req, res)
      expect(res.end).toHaveBeenCalledWith(JSON.stringify({error: 'Resource not found'}))
    })
  })

  describe('receives a request for /ping', () => {
    beforeEach(() => {
      req.url = '/ping'
    })

    test('sets Content-Type header', async () => {
      await router(req, res)
      expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
    })

    test('responds with 200 status code', async () => {
      await router(req, res)
      expect(res.writeHead).toHaveBeenCalledWith(200)
    })

    test('responds with a JSON string in the body', async () => {
      await router(req, res)
      expect(res.end).toHaveBeenCalledWith(JSON.stringify({status: 'healthy'}))
    })
  })
})
```

There is a lot to unpack here. You should familiarize yourself with the various [Jest setup and teardown] functions,
but for now just know that `describe` gives us a way to group tests together in the same [scope], and any function you
pass to `beforeEach` gets called before each test is run.

```javascript
const http = require('http')

const router = require('./server')

describe('router', () => {
  let req
  let res

  beforeEach(() => {
    req = new http.IncomingMessage()
    res = new http.ServerResponse(req)
    res.setHeader = jest.fn()
    res.writeHead = jest.fn()
    res.end = jest.fn()
  })
```

First, we import the [Node.js http] module to create [http.IncomingMessage] and [http.ServerResponse] objects that we
can pass to our `router` function. Then we use [jest.fn] to replace `res.setHeader`, `res.writeHead`, and `res.end`
with mock functions, so we can observe how they get used.

```javascript
  describe('receives a request for an unsupported URL path', () => {
    beforeEach(() => {
      req.url = '/invalid-url-path'
    })

    test('sets Content-Type header', async () => {
      await router(req, res)
      expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
    })

    test('responds with 404 status code', async () => {
      await router(req, res)
      expect(res.writeHead).toHaveBeenCalledWith(404)
    })

    test('responds with a JSON string in the body', async () => {
      await router(req, res)
      expect(res.end).toHaveBeenCalledWith(JSON.stringify({error: 'Resource not found'}))
    })
  })
```

This group of tests is wrapped in another `describe` function that is nested inside the outer `describe`. That means
the `beforeEach` function in the [scope] of the outer `describe` will be run first, followed by the `beforeEach` in the
[scope] of the inner `describe`, then finally the test function will be run.

Each test is an [async function] that calls `router` and awaits a response. The [await] operator is necessary because
we defined our `router` as an [async function] and, as such, it returns a [Promise] right away but does not actually
execute the code within the function yet. If we did not use the [await] operator when calling our `router` function,
the test would finish running before the code inside the `router` function ever had a chance to execute and, as a
result, our tests would fail.

If you are wondering why we defined our `router` as an [async function], you are asking a very good question. In fact,
in its current state, `router` does not need to be asynchronous. The reason we defined it that way is that it will
eventually call out to other services like [PostgreSQL] and, when it does, it will need to wait some amount of time for
a response.

```javascript
  describe('receives a request for /ping', () => {
    beforeEach(() => {
      req.url = '/ping'
    })

    test('sets Content-Type header', async () => {
      await router(req, res)
      expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
    })

    test('responds with 200 status code', async () => {
      await router(req, res)
      expect(res.writeHead).toHaveBeenCalledWith(200)
    })

    test('responds with a JSON string in the body', async () => {
      await router(req, res)
      expect(res.end).toHaveBeenCalledWith(JSON.stringify({status: 'healthy'}))
    })
  })
```

The second group of tests is similar to the first, except that it tests the `/ping` route whereas the first group tests
how the router handles an unrecognized route. In other words, this group of tests focuses on the `if` code path, and
the other focuses on the `else` code path, when looking back at the `router` logic:

```javascript
    if ('/ping' === req.url) {
        body = {status: 'healthy'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }
```

The last thing we should touch on is the [Jest expect] function. In most of these tests, we call `expect` with a mock
function created in the outer `beforeEach` using [jest.fn]:

```javascript
  beforeEach(() => {
    req = new http.IncomingMessage()
    res = new http.ServerResponse(req)
    res.setHeader = jest.fn()
    res.writeHead = jest.fn()
    res.end = jest.fn()
  })
```

When we call `router` in these tests, we pass it that `res` object with the mocked functions. This allows us to use
[toHaveBeenCalledWith] to assert that `router` called those functions and passed them the arguments we expect.

### Make router a separate module

Our `router` function is a well-defined unit of code that could easily be factored out of `server.js` as a separate
module. This is a good idea because, as our application grows over time, this function will grow to handle more routes.
Also, it would make a lot more sense if `server.js` exported its `server` object.

Create a new file in the `src` directory called `router.js`, and another called `router.test.js`. Move all the code
from `server.test.js` into `router.test.js` and update `router.test.js` to import `router` from the correct file:

```javascript
const router = require('./router')
```

When you are done, your project folder should look like this:

```
learn-to-code/
├─ node_modules/
├─ src/
│  ├─ router.js
│  ├─ router.test.js
│  ├─ server.js
│  └─ server.test.js
├─ .gitignore
├─ docker-compose.yml
├─ package.json
├─ package-lock.json
└─ README.md
```

Now cut the code that defines `router` out of `server.js` and paste it into `router.js`. Be sure to export `router` at
the bottom of the file. It should look like this when you are done:

```javascript
const router = async (req, res) => {
    let body;
    let code;

    if ('/ping' === req.url) {
        body = {status: 'healthy'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }

    res.setHeader('Content-Type', 'application/json')
    res.writeHead(code)
    res.end(JSON.stringify(body))
}

module.exports = router
```

In `server.js`, we can import `router` from `./router.js`. We should also make `server.js` export `server` so we can
write tests for our web server. In the end, it should look like this:

```javascript
const http = require('http')

const router = require('./router')

const host = process.env.APP_HOST || 'localhost'
const port = process.env.APP_PORT || 8080

const server = http.createServer(router)

server.on('listening', () => {
    console.log(`Server listening at http://${host}:${port}`)
})

if (require.main === module) {
    try {
        server.listen(port, host)
    } catch(err) {
        console.error(err, 'Error starting server')
    }
}

module.exports = server
```

Now we can add some tests to `server.test.js`:

```javascript
const server = require('./server')

describe('server', () => {
  let consoleLog

  beforeEach(() => {
    consoleLog = jest.spyOn(console, 'log')
    consoleLog.mockImplementation(() => {})
  })

  afterEach(() => {
    consoleLog.mockRestore()
  })

  test('logs to the console on listening event', (done) => {
    const host = process.env.APP_HOST || 'localhost'
    const port = process.env.APP_PORT || 8080

    server.on('listening', () => {
      expect(consoleLog).toHaveBeenCalledWith(`Server listening at http://${host}:${port}`)
      done()
    })
    server.emit('listening')
  })
})
```

There are a couple of things to note here...

```javascript
  beforeEach(() => {
    consoleLog = jest.spyOn(console, 'log')
    consoleLog.mockImplementation(() => {})
  })

  afterEach(() => {
    consoleLog.mockRestore()
  })
```

Instead of creating a mock function using [jest.fn], we are modifying the existing global function [console.log] using
[jest.spyOn] so we can tell when it has been called. We are also using [mockImplementation] to prevent it from logging
to the console during our test by temporarily replacing it with a function that does nothing. We are then restoring it
back to its original form after each test is run, by calling [mockRestore] in the `afterEach` function.

```javascript
  test('logs to the console on listening event', (done) => {
    const host = process.env.APP_HOST || 'localhost'
    const port = process.env.APP_PORT || 8080

    server.on('listening', () => {
      expect(consoleLog).toHaveBeenCalledWith(`Server listening at http://${host}:${port}`)
      done()
    })
    server.emit('listening')
  })
```

Here, we are using the `done` function that is passed as an argument to our test function. This is necessary because
we need to wait for an event handler to be called and, like an [async function], the logic inside the event handler
normally would not execute before we reached the end of the test function.

Take some time to learn more about [testing asynchronous code]. We will be writing a lot of it.


## 12. Create a Linux web server using [Docker] & [Docker Compose]

At this point, we have a [Node.js] web server with a working (and well-tested) ping endpoint. Before writing unit tests
with [Jest], we manually tested the server by running:

```shell
node src/server.js
```

...and visiting http://localhost:8080/ping in a web browser.

When we did this, our web server was running in a [development environment] using whatever operating system we have
installed on our computer. However, when we deploy our code to a [production environment] we may want to use a different
OS. [Alpine Linux] is popular because it is lightweight, secure, and [open source].

What we want is for our [development environment] to match our [production environment], so let's create a [Docker]
image that uses [Alpine Linux] as an OS and has [Node.js] already installed on it. Let's also configure the image to
include our application code and, on startup, start the web server listening on port `8080`.

To do this, we need a [Dockerfile]. Create a new file called `Dockerfile` (without any [filename extension]) so that
your project folder looks like this:

```
learn-to-code/
├─ node_modules/
├─ src/
│  ├─ router.js
│  ├─ router.test.js
│  ├─ server.js
│  └─ server.test.js
├─ .gitignore
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
├─ package-lock.json
└─ README.md
```

### Creating a Dockerfile

Open `Dockerfile` in your [IDE] and paste in the following code:

```dockerfile
# syntax=docker/dockerfile:1
FROM node:14-alpine
WORKDIR /home/node/app
COPY . .
RUN npm install
RUN chown -R node:node .
EXPOSE 8080
CMD [ "npm", "start" ]
```

Let's go through this line-by-line to understand what is happening here.

```dockerfile
# syntax=docker/dockerfile:1
```

The first line is a [comment], indicated by the `#` at the beginning of the line. All programming languages have some
sort of [comment] syntax. In [JavaScript], comments are denoted by `//` on a single line, or between `/*` and `*/` when
they break across multiple lines. [SQL] uses `--` for inline comments, or `/*` and `*/` for multiline. [Shell] scripts
and [Dockerfile] use `#`.

This particular comment is actually called a [parser directive] that tells [Docker] which version of its syntax is being
used. If the developers who make [Docker] decide to completely change the way a [Dockerfile] is written, they would need
to support the old version of the syntax for some amount of time so other developers could upgrade their code. If and
when that happens, you will need to modify this line in order to use new features of the latest version.

```dockerfile
FROM node:14-alpine
```

The `FROM` instruction tells [Docker] to use [node:14-alpine] as a base image, which gets us most of the way there by
providing a snapshot of [Alpine Linux] with [Node.js] v14.x already installed on it. How convenient!

```dockerfile
WORKDIR /home/node/app
```

The `WORKDIR` instruction sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` instructions
that follow it in the [Dockerfile]. If the directory `/home/node/app` doesn't already exist on this image, it will be
created automatically.

```dockerfile
COPY . .
```

The `COPY` instruction is used to copy everything from the project folder on the host machine into `/home/node/app` on
the virtual [Alpine Linux] container. It takes two arguments, `COPY <source> <destination>`, where `<source>` is the
local host directory and `<destination>` is the container directory.

When you see the symbol `.` being used in the context of file systems, it means 'current directory'. Likewise, `..`
means 'parent directory'. From your project folder, if you run `cd src` in the terminal you will change directory so
that the current working directory is `src`. If you then run `cd ..`, you will change back to the parent directory,
which is your project folder. If you run `cd .` nothing will happen because you are changing to the current directory.

```dockerfile
RUN npm install
```

The `RUN` instruction is used here to install the [dependencies] defined in our [package.json] file via `npm install`.
`RUN` commands are run from inside the container, as if you were using the [Alpine Linux] terminal.

```dockerfile
RUN chown -R node:node .
```

The `RUN` instruction is then used to change the owner of the current working directory using [chown] with the `-R`
flag, which applies the change recursively to all subdirectories. This ensures that our [Node.js] application will have
full access to all the files and folders in `/home/node/app`.

```dockerfile
EXPOSE 8080
```

The `EXPOSE` instruction informs Docker that the container will listen on port `8080` at runtime.

```dockerfile
CMD [ "npm", "start" ]
```

The `CMD` instruction provides a default command to run when a container is started. The syntax is a little different
here; it looks like a [JSON] array with the different parts of a command you would run in the terminal. Essentially,
that's what it is. When the container starts, it will run `npm start` which is a script we need to add to [package.json]
like we did for `npm test`.

Now, open your [package.json] file and add a `start` script like this:

```json
{
  "name": "learn-to-code",
  "version": "1.0.0",
  "scripts": {
    "start": "node src/server.js",
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```

If you run `npm start` from your project folder, you will see that your server starts running from your local machine.
Hit `CTRL+C` to stop it.

### Building a Docker image

Now we want to build a [Docker] image using our [Dockerfile]. To do so, run [docker build] like this:

```shell
docker build . -t server
```

The first parameter passed to [docker build] is `.`, which tells it to use the [Dockerfile] in the current directory
(your project folder).

The second parameter, `-t server`, assigns the name `server` to our image. You can call it whatever you want, but we
will be referencing it later so try and remember what you called it.

You should see output like this:

```shell
[+] Building 10.0s (12/12) FINISHED                                                                                                                                                                                                                                                                                     
 => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                                               0.0s
 => => transferring dockerfile: 37B                                                                                                                                                                                                                                                                                0.0s
 => [internal] load .dockerignore                                                                                                                                                                                                                                                                                  0.0s
 => => transferring context: 2B                                                                                                                                                                                                                                                                                    0.0s
 => resolve image config for docker.io/docker/dockerfile:1                                                                                                                                                                                                                                                         0.3s
 => CACHED docker-image://docker.io/docker/dockerfile:1@sha256:e2a8561e419ab1ba6b2fe6cbdf49fd92b95912df1cf7d313c3e2230a333fdbcc                                                                                                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:14-alpine                                                                                                                                                                                                                                                  0.3s
 => [1/5] FROM docker.io/library/node:14-alpine@sha256:ed51af876dd7932ce5c1e3b16c2e83a3f58419d824e366de1f7b00f40c848c40                                                                                                                                                                                            0.0s
 => [internal] load build context                                                                                                                                                                                                                                                                                  0.2s
 => => transferring context: 559.96kB                                                                                                                                                                                                                                                                              0.2s
 => CACHED [2/5] WORKDIR /home/node/app                                                                                                                                                                                                                                                                            0.0s
 => [3/5] COPY . .                                                                                                                                                                                                                                                                                                 0.5s
 => [4/5] RUN npm install                                                                                                                                                                                                                                                                                          2.9s
 => [5/5] RUN chown -R node:node .                                                                                                                                                                                                                                                                                 4.9s
 => exporting to image                                                                                                                                                                                                                                                                                             0.5s
 => => exporting layers                                                                                                                                                                                                                                                                                            0.5s
 => => writing image sha256:32c7e5e41c0d021cb198f2f1e0cd5e592c2e6a4783229e416162c6cd285e1686                                                                                                                                                                                                                       0.0s
 => => naming to docker.io/library/server  
```

To see a list of all the [Docker] images you have built, use:

```shell
docker images ls
```

You should then see something like this:

```shell
REPOSITORY       TAG         IMAGE ID       CREATED             SIZE
server           latest      32c7e5e41c0d   3 minutes ago       198MB
postgres         13-alpine   258269eae836   3 weeks ago         157MB
sosedoff/pgweb   latest      5b5bb168f883   6 months ago        38.6MB
```

Notice that we still have images for [PostgreSQL] and [PGWeb] that were created using [docker-compose] earlier. We will
come back to that in a minute.

### Creating a Docker container

To create and start a container using our `server` image, use the [docker run] command with the following parameters:

```shell
docker run --name=server_1 --hostname=server -e APP_HOST=server -p 8080:8080 -d server
```

The first parameter, `--name=server_1`, gives the container itself an alias of `server_1`. Again, you can call it
whatever you want. This name will come in handy when you want to run other commands like [docker stop], [docker start],
and [docker rm] because you will have to specify which container you are targeting.

The second parameter, `--hostname=server`, registers the alias `server` to the container's [IP address]. This is similar
to `localhost`, which is an alias for your host machine's IP.

The third parameter, `-e APP_HOST=server`, sets the `APP_HOST` [environment variable] to `server`, which is the
hostname alias we just assigned to the container's [IP address]. You may recall that our [Node.js] app uses
`process.env.APP_HOST` (if it is set) and passes it to [http.createServer].

The fourth parameter, `-p 8080:8080`, creates a port mapping between the host and container so that requests to
http://localhost:8080 get forwarded to http://server:8080. This is the same as the [docker-compose ports config] we
used earlier for our [PostgreSQL] and [PGWeb] containers in `docker-compose.yml`.

The fifth parameter, `-d`, runs the container in 'detached mode', which means it runs in the background. We used this
same flag when running `docker-compose up -d`.

Finally, we specify `server` at the end, which tells [docker run] to use the image we created using [docker build],
which we named `server`. If you named your image something else, use that name instead.

After running the [docker run] command above, you should see a long string of letters and numbers like this:

```shell
a2ab91f66648a3daf39015e50a123c2e1578f1e9b014a5304c6a12a1e33698ab
```

This is a unique identifier for the container you created, so yours will not be the same as mine. You can list all of
your containers by running:

```shell
docker container ls
```

...which will output something like this:

```shell
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                    NAMES
a2ab91f66648   server    "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   0.0.0.0:8080->8080/tcp   server_1
```

Your list of containers might also show the [PostgreSQL] and [PGWeb] containers, if you still have them running.

Notice the `CONTAINER ID` column above has an abbreviated version of the long container ID that was output when you ran
[docker run]. There are three ways you can refer to a container:

1. [UUID] long identifier (ex: `a2ab91f66648a3daf39015e50a123c2e1578f1e9b014a5304c6a12a1e33698ab`)
1. [UUID] short identifier (ex: `a2ab91f66648`)
1. Name given by `--name` parameter (ex: `server_1`)

To stop your container, run [docker stop]:

```shell
docker stop server_1
```

To start your container again, run [docker start]:

```shell
docker start server_1
```

To remove (i.e. delete) the container, run [docker rm]:

```shell
docker rm server_1
```

You can always create a new container using a [Docker] image, so it's okay to delete containers. You can also delete
your images, because you have a [Dockerfile] that can be used to rebuild your `server` image, and the other images are
hosted on [DockerHub], which is kind of like [GitHub] for [Docker] images.

### Docker vs. Docker Compose

By now you may be wondering, "What's the difference between Docker and Docker Compose?"

[Docker Compose] is a tool for defining and running multi-container [Docker] applications. With Compose, you use a
[YAML] file to configure your application’s services. Then, with a single command, you create and start all the
services from your configuration.

Open `docker-compose.yml` and add the following service to it:

```yaml
  server:
    build: .
    restart: unless-stopped
    environment:
      - APP_HOST=server
      - APP_PORT=8080
      - NODE_ENV=development
    healthcheck:
      test: wget --no-verbose --tries=1 --spider server:8080/ping || exit 1
      interval: 30s
      retries: 10
      timeout: 5s
    ports:
      - "8080:8080"
    volumes:
      - .:/home/node/app
```

Again, be sure the indentation is correct. Your file should now look like this:

```yaml
version: "3.7"

services:
  database:
    image: postgres:13-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=mydbuser
      - POSTGRES_PASSWORD=mydbpassword
      - POSTGRES_DB=mydbname
    healthcheck:
      test: pg_isready -U mydbuser
      interval: 5s
      retries: 10
      timeout: 5s
    ports:
      - "5432:5432"

  pgweb:
    image: sosedoff/pgweb
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgres://mydbuser:mydbpassword@database:5432/mydbname?sslmode=disable
    ports:
      - "8081:8081"

  server:
    build: .
    restart: unless-stopped
    environment:
      - APP_HOST=server
      - APP_PORT=8080
      - NODE_ENV=development
    healthcheck:
      test: wget --no-verbose --tries=1 --spider server:8080/ping || exit 1
      interval: 30s
      retries: 10
      timeout: 5s
    ports:
      - "8080:8080"
    volumes:
      - .:/home/node/app
```

When we ran [docker build], we gave it several parameters like `--name=server_1` and `--hostname=server` to configure
it. Here, we are putting those configurations (and some new ones) in a [YAML] file, making them much easier to read and
reason about.

Notice that this new service configuration does not specify an `image` like the others. That's because we are not
hosting our `server` image on [DockerHub] or some other remote server. Instead, we are using `build: .` to build the
image using the [Dockerfile] in the current directory.

The [docker-compose healthcheck config] is used to set a command that gets run from inside the container on a regular
`interval` (every 30 seconds in this case) to determine if the container is healthy. Since we tell the container which
command to run, we determine what the term "healthy" means for any given service. In this case, we are calling the ping
endpoint we created in our [Node.js] app to see if it responds successfully and, if so, that means the server is up and
running and accepting requests. Each call to the ping endpoint will `timeout`, or stop waiting, after 5 seconds if it
does not get a response. It will then try again, making up to 10 `retries`, until it either gets a successful response
or stops trying and reports the container as being "unhealthy".

The [docker-compose volumes config] is used to create a volume mount. A volume is a place where files are stored, like
your hard drive. The `server` container has some amount of storage from your hard drive allocated to it when it gets
created, and that piece of your hard drive essentially becomes the container's hard drive. When you mount a volume, you
create a link to it. In this case, we are mounting the `/home/node/app` directory in our container to `.`, which is the
current directory on our host. By doing so, any files we add, remove, or change in our project folder will also get
added, removed, or changed inside our [virtual machine].

![Inception GIF](https://media.giphy.com/media/7pHTiZYbAoq40/giphy.gif)

Now we can start all of our containers using [Docker Compose], but first let's clean up our existing containers. This
way, we can start fresh and avoid any port conflicts due to multiple containers attempting to grab the same port.

From the terminal, run:

```shell
docker kill $(docker ps -q)
```

This command forcibly stop all running containers, using `docker ps -q` to generate a list of container IDs.

Next, remove all containers using:

```shell
docker rm $(docker ps -a -q)
```

It's not necessary now, but you could also remove all images by running:

```shell
docker rmi $(docker images -q)
```

Occasionally it's a good idea to run these commands just to free up some space on your hard drive. Every time you build
a new version of your `server` image, for example, it will remove the name from the old image but will not delete the
file. You can use [docker image prune] to remove just the old, unused images.

Now let's bring up the whole stack by running:

```shell
docker-compose up -d
```

If you removed all images, it will need to pull [postgres:13-alpine] and [sosedoff/pgweb] again from [DockerHub], which
can take a minute. It will also need to rebuild our `server` image, which uses [node:14-alpine], so that image will get
pulled again from [DockerHub].

You should see output like this:

```shell
Pulling database (postgres:13-alpine)...
13-alpine: Pulling from library/postgres
595b0fe564bb: Pull complete
343d254f5bda: Pull complete
94173ef17c94: Pull complete
b1732827bd55: Pull complete
0bacf9b4d489: Pull complete
592d5197fc17: Pull complete
78450ea37007: Pull complete
1f8cd65c72c6: Pull complete
Digest: sha256:c4c7a1585974706b5f72b8ab595e47399b23b2e03d93bbf75c1b0904be1803dc
Status: Downloaded newer image for postgres:13-alpine
Pulling pgweb (sosedoff/pgweb:)...
latest: Pulling from sosedoff/pgweb
9d48c3bd43c5: Pull complete
19c74ff0265e: Pull complete
Digest: sha256:85e0132e0cce703a28592bb65e8355cc240d5f1cb4c4f57e2487fd3d5ce1120c
Status: Downloaded newer image for sosedoff/pgweb:latest
Building server
[+] Building 13.8s (14/14) FINISHED                                                                                                                                                                                                                                                                                     
 => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                                               0.0s
 => => transferring dockerfile: 90B                                                                                                                                                                                                                                                                                0.0s
 => [internal] load .dockerignore                                                                                                                                                                                                                                                                                  0.0s
 => => transferring context: 2B                                                                                                                                                                                                                                                                                    0.0s
 => resolve image config for docker.io/docker/dockerfile:1                                                                                                                                                                                                                                                         0.7s
 => [auth] docker/dockerfile:pull token for registry-1.docker.io                                                                                                                                                                                                                                                   0.0s
 => CACHED docker-image://docker.io/docker/dockerfile:1@sha256:e2a8561e419ab1ba6b2fe6cbdf49fd92b95912df1cf7d313c3e2230a333fdbcc                                                                                                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:14-alpine                                                                                                                                                                                                                                                  0.4s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                                                                                                                                                        0.0s
 => [internal] load build context                                                                                                                                                                                                                                                                                  0.4s
 => => transferring context: 1.12MB                                                                                                                                                                                                                                                                                0.4s
 => [1/5] FROM docker.io/library/node:14-alpine@sha256:ed51af876dd7932ce5c1e3b16c2e83a3f58419d824e366de1f7b00f40c848c40                                                                                                                                                                                            0.0s
 => CACHED [2/5] WORKDIR /home/node/app                                                                                                                                                                                                                                                                            0.0s
 => [3/5] COPY . .                                                                                                                                                                                                                                                                                                 1.2s
 => [4/5] RUN npm install                                                                                                                                                                                                                                                                                          2.8s
 => [5/5] RUN chown -R node:node .                                                                                                                                                                                                                                                                                 6.9s
 => exporting to image                                                                                                                                                                                                                                                                                             0.8s
 => => exporting layers                                                                                                                                                                                                                                                                                            0.8s
 => => writing image sha256:23ae89bb28afd9701cbb0358296b74d7a6461430d0743e7106655866ba7c9643                                                                                                                                                                                                                       0.0s
 => => naming to docker.io/library/learn-to-code_server                                                                                                                                                                                                                                                            0.0s
Successfully built 23ae89bb28afd9701cbb0358296b74d7a6461430d0743e7106655866ba7c9643
WARNING: Image for service server was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating learn-to-code_database_1 ... done
Creating learn-to-code_server_1   ... done
Creating learn-to-code_pgweb_1    ... done
```

Notice that `WARNING` near the end:

```shell
WARNING: Image for service server was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
```

That just means the next time you run `docker-compose up` it will not automatically rebuild the `server` image. It will
simply use the image that has already been built. Fortunately, you won't need to rebuild your image very often thanks
to the [docker-compose volumes config] we used.

Whenever you make a code change, just restart the [Node.js] server by running:

```shell
docker-compose restart server
```

### Automatically detecting code changes

Software developers like to automate things. For this reason, some [wonderful genius] has already created a utility
called [Nodemon] that can monitor your [Node.js] application for code changes and automatically restart it. By using
this, we can focus on writing code without worrying about constantly restarting our server.

From the project folder, run:

```shell
npm install -D nodemon
```

Then, open `docker-compose.yml` and modify the `server` service configuration to add the following just below the
`build` instruction:

```yaml
    command: [ "node_modules/.bin/nodemon", "src/server.js" ]
```

This will override the `CMD` instruction at the bottom of our [Dockerfile], so instead of running `npm start` it will
run `nodemon` using an executable file that got installed in the `node_modules/bin` directory when we ran `npm install`
a moment ago.

The `server` service configuration in `docker-compose.yml` should now look like this:

```yaml
  server:
    build: .
    command: [ "node_modules/.bin/nodemon", "src/server.js" ]
    restart: unless-stopped
    environment:
      - APP_HOST=server
      - APP_PORT=8080
      - NODE_ENV=development
    healthcheck:
      test: wget --no-verbose --tries=1 --spider server:8080/ping || exit 1
      interval: 30s
      retries: 10
      timeout: 5s
    ports:
      - "8080:8080"
    volumes:
      - .:/home/node/app
```

Now destroy your running containers and bring them back up using:

```shell
docker-compose down && docker-compose up -d
```

You can confirm that [Nodemon] is running by checking the `server` logs:

```shell
docker-compose logs server
```

You should see the following output:

```shell
Attaching to learn-to-code_server_1
server_1    | [nodemon] 2.0.7
server_1    | [nodemon] to restart at any time, enter `rs`
server_1    | [nodemon] watching path(s): *.*
server_1    | [nodemon] watching extensions: js,mjs,json
server_1    | [nodemon] starting `node src/server.js`
server_1    | Server listening at https://server:8080
```

By default, [Nodemon] watches for changes to any file with a [filename extension] of `.js`, `.mjs`, or `.json`.

Go ahead and try it out. Visit http://localhost:8080/ping in your browser, then make a change to `src/router.js` like
this:

```js
    if ('/ping' === req.url) {
        body = {status: 'healthy', foo: 'bar'}
        code = 200
    } else {
        body = {error: 'Resource not found'}
        code = 404
    }
```

...and refresh the page in your browser. You should see the [JSON] response object now contains `foo: "bar"`.

Just be sure to remove that code change, or it will cause one of your tests to fail when you run `npm test`!


## 13. Set up a [reverse proxy server] using [NGINX]

TODO


## 14. Read the contents of a file using [fs.readFile]

TODO


## 15. Install and configure [node-postgres] using [NPM]

TODO


## 16. Create a database migration module using [fs.readFile] and [node-postgres]

TODO


## 17. Create a cryptographic one-way [hash] using [crypto.createHash]

TODO


## 18. Create a Command Line Interface ([CLI]) using [Node.js]

TODO


## 19. Create a Data Access Object ([DAO]) for performing [CRUD] operations

TODO


## 20. Create [REST] endpoints for [user registration] and [authentication]

TODO


## 21. Implement a [session management] strategy using an [HTTP cookie] header

TODO


## 22. Create a user login web page using [HTML] and [CSS]

TODO


## 23. Create a user profile web page that requires [authentication] to access

TODO


## 24. Create a user admin page that requires [authorization] to access

TODO


[Alpine Linux]: https://alpinelinux.org/
[API]: https://en.wikipedia.org/wiki/API
[arrow function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[async function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[authentication]: https://en.wikipedia.org/wiki/Authentication
[authorization]: https://en.wikipedia.org/wiki/Authorization
[await]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
[BitBucket]: https://bitbucket.org/product
[bugs]: https://en.wikipedia.org/wiki/Software_bug
[changelog]: https://en.wikipedia.org/wiki/Changelog
[chown]: https://en.wikipedia.org/wiki/Chown
[CLI]: https://en.wikipedia.org/wiki/Command-line_interface
[clone your repo]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[code coverage]: https://en.wikipedia.org/wiki/Code_coverage
[comment]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
[CommonJS]: https://en.wikipedia.org/wiki/CommonJS
[CommonJS modules]: https://nodejs.org/docs/latest-v14.x/api/modules.html#modules_modules_commonjs_modules
[conditional logic]: https://en.wikipedia.org/wiki/Conditional_(computer_programming)
[configure an upstream remote]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork
[console.error]: https://developer.mozilla.org/en-US/docs/Web/API/Console/error
[console.log]: https://developer.mozilla.org/en-US/docs/Web/API/Console/log
[const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[Content-Type]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
[CREATE TABLE]: https://www.postgresql.org/docs/13/sql-createtable.html
[CRUD]: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[crypto.createHash]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#crypto_crypto_createhash_algorithm_options
[CSS]: https://en.wikipedia.org/wiki/CSS
[DAO]: https://en.wikipedia.org/wiki/Data_access_object
[database migration]: https://en.wikipedia.org/wiki/Schema_migration
[DEFAULT]: https://www.postgresql.org/docs/13/ddl-default.html
[DELETE]: https://www.postgresql.org/docs/13/sql-delete.html
[dependencies]: https://docs.npmjs.com/cli/v6/configuring-npm/package-json#dependencies
[development environment]: https://en.wikipedia.org/wiki/Deployment_environment#Development
[Docker]: https://www.docker.com/get-started
[Dockerfile]: https://docs.docker.com/engine/reference/builder/
[DockerHub]: https://hub.docker.com/
[Docker Compose]: https://docs.docker.com/compose/
[docker build]: https://docs.docker.com/engine/reference/commandline/build/
[docker image prune]: https://docs.docker.com/engine/reference/commandline/image_prune/
[docker rm]: https://docs.docker.com/engine/reference/commandline/rm/
[docker run]: https://docs.docker.com/engine/reference/commandline/run/
[docker start]: https://docs.docker.com/engine/reference/commandline/start/
[docker stop]: https://docs.docker.com/engine/reference/commandline/stop/
[docker-compose]: https://docs.docker.com/compose/reference/
[docker-compose environment config]: https://docs.docker.com/compose/compose-file/compose-file-v3/#environment
[docker-compose healthcheck config]: https://docs.docker.com/compose/compose-file/compose-file-v3/#healthcheck
[docker-compose ports config]: https://docs.docker.com/compose/compose-file/compose-file-v3/#ports
[docker-compose volumes config]: https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes
[docker-compose up]: https://docs.docker.com/compose/reference/up/
[Docker Desktop]: https://www.docker.com/products/docker-desktop
[ECMAScript]: https://en.wikipedia.org/wiki/ECMAScript
[ECMAScript modules]: https://nodejs.org/docs/latest-v14.x/api/all.html#esm_modules_ecmascript_modules
[enable coding assistance for Node.js]: https://www.jetbrains.com/help/webstorm/configuring-javascript-libraries.html#ws_js_libraries_node_js_core
[end]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_response_end_data_encoding_callback
[environment variable]: https://en.wikipedia.org/wiki/Environment_variable
[EventEmitter]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#events_class_eventemitter
[export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[filename extension]: https://en.wikipedia.org/wiki/Filename_extension
[fork this repo]: https://docs.github.com/en/github/getting-started-with-github/fork-a-repo
[fs.readFile]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#fs_fs_readfile_path_options_callback
[functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[Git]: https://git-scm.com/
[git add]: https://git-scm.com/docs/git-add
[git commit]: https://git-scm.com/docs/git-commit
[git merge]: https://git-scm.com/docs/git-merge
[git pull]: https://git-scm.com/docs/git-pull
[git push]: https://git-scm.com/docs/git-push
[GitHub]: https://docs.github.com/en/github/getting-started-with-github/quickstart
[GitHub Dependabot]: https://docs.github.com/en/code-security/supply-chain-security/configuring-dependabot-security-updates
[GitLab]: https://about.gitlab.com/
[GUI]: https://en.wikipedia.org/wiki/Graphical_user_interface
[hash]: https://en.wikipedia.org/wiki/Cryptographic_hash_function
[HTML]: https://en.wikipedia.org/wiki/HTML
[HTTP]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
[HTTP cookie]: https://en.wikipedia.org/wiki/HTTP_cookie
[HTTP status code]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[http.createServer]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_http_createserver_options_requestlistener
[http.IncomingMessage]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_class_http_incomingmessage
[http.Server]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_class_http_server
[http.ServerResponse]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_class_http_serverresponse
[IDE]: https://en.wikipedia.org/wiki/Integrated_development_environment
[if...else]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
[import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[INSERT]: https://www.postgresql.org/docs/13/sql-insert.html
[Install Docker Desktop (MacOS)]: https://docs.docker.com/docker-for-mac/install/
[Install Docker Desktop (Windows)]: https://docs.docker.com/docker-for-windows/install/
[install Node.js]: https://nodejs.org/en/download/
[INTEGER]: https://www.postgresql.org/docs/13/datatype-numeric.html#DATATYPE-INT
[Integrated Terminal (VSCode)]: https://code.visualstudio.com/docs/editor/integrated-terminal
[IntelliJ]: https://www.jetbrains.com/idea/
[IP address]: https://en.wikipedia.org/wiki/IP_address
[Jasmine]: https://jasmine.github.io/index.html
[JavaScript]: https://en.wikipedia.org/wiki/JavaScript
[Jest]: https://jestjs.io/docs/getting-started
[Jest expect]: https://jestjs.io/docs/using-matchers
[Jest setup and teardown]: https://jestjs.io/docs/setup-teardown
[jest.fn]: https://jestjs.io/docs/jest-object#jestfnimplementation
[jest.spyOn]: https://jestjs.io/docs/jest-object#jestspyonobject-methodname
[JSON]: https://en.wikipedia.org/wiki/JSON
[JSON.parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
[JSON.stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[JWT]: https://en.wikipedia.org/wiki/JSON_Web_Token
[let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[libpq connection URI]: https://www.postgresql.org/docs/13/libpq-connect.html#LIBPQ-CONNSTRING
[listening]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#net_event_listening
[logical OR]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
[LTS]: https://en.wikipedia.org/wiki/Long-term_support
[main module]: https://nodejs.org/docs/latest-v14.x/api/modules.html#modules_accessing_the_main_module
[manual testing]: https://en.wikipedia.org/wiki/Manual_testing
[Mocha]: https://mochajs.org/
[mockImplementation]: https://jestjs.io/docs/mock-function-api#mockfnmockimplementationfn
[mockRestore]: https://jestjs.io/docs/mock-function-api#mockfnmockrestore
[NGINX]: https://nginx.org/en/docs/beginners_guide.html
[Node packages]: https://docs.npmjs.com/about-packages-and-modules
[Node Version Manager for Windows]: https://github.com/coreybutler/nvm-windows
[Nodemon]: https://nodemon.io/
[Node.js]: https://nodejs.org/dist/latest-v14.x/docs/api/index.html
[Node.js assert]: https://nodejs.org/docs/latest-v14.x/api/all.html#assert_assert
[Node.js changelog]: https://github.com/nodejs/node/blob/master/CHANGELOG.md
[Node.js http]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_http
[node:14-alpine]: https://github.com/nodejs/docker-node
[node-postgres]: https://node-postgres.com/
[node_modules]: https://docs.npmjs.com/cli/v6/configuring-npm/folders#node-modules
[NOT NULL]: https://www.postgresql.org/docs/13/ddl-constraints.html#id-1.5.4.6.6
[now()]: https://www.postgresql.org/docs/13/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT
[NPM]: https://www.npmjs.com/get-npm
[npm audit]: https://docs.npmjs.com/cli/v6/commands/npm-audit
[npm install]: https://docs.npmjs.com/cli/v6/commands/npm-install
[npmjs.com]: https://www.npmjs.com/
[NVM]: https://github.com/nvm-sh/nvm
[objects]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
[open source]: https://en.wikipedia.org/wiki/Open-source_software
[package.json]: https://docs.npmjs.com/cli/v6/configuring-npm/package-json
[parser directive]: https://docs.docker.com/engine/reference/builder/#parser-directives
[PGWeb]: https://sosedoff.github.io/pgweb/
[postgres:13-alpine]: https://hub.docker.com/_/postgres
[PostgreSQL]: https://www.postgresql.org/docs/13/index.html
[PowerShell]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.1
[PRIMARY KEY]: https://www.postgresql.org/docs/13/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS
[production environment]: https://en.wikipedia.org/wiki/Deployment_environment#Production
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[psql]: https://www.postgresql.org/docs/13/app-psql.html
[pull request]: https://git-scm.com/docs/git-request-pull
[React]: https://reactjs.org/
[recursion]: https://en.wikipedia.org/wiki/Recursion_(computer_science)
[refactor]: https://en.wikipedia.org/wiki/Code_refactoring
[relational database]: https://en.wikipedia.org/wiki/Relational_database
[req.url]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http2_request_url
[response body]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#body_2
[response header]: https://developer.mozilla.org/en-US/docs/Glossary/Response_header
[REST]: https://en.wikipedia.org/wiki/Representational_state_transfer
[reverse proxy server]: https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/
[RTFM]: https://en.wikipedia.org/wiki/RTFM
[scope]: https://developer.mozilla.org/en-US/docs/Glossary/Scope
[semantic versioning]: https://docs.npmjs.com/about-semantic-versioning
[sequence generator]: https://www.postgresql.org/docs/13/sql-createsequence.html
[SERIAL]: https://www.postgresql.org/docs/13/datatype-numeric.html#DATATYPE-SERIAL
[server.on]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#events_emitter_on_eventname_listener
[server.listen]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#net_server_listen
[session management]: https://en.wikipedia.org/wiki/Session_(computer_science)#Session_management
[setHeader]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_response_setheader_name_value
[setting up Git]: https://docs.github.com/en/github/getting-started-with-github/set-up-git#setting-up-git
[shell]: https://en.wikipedia.org/wiki/Shell_(computing)
[sosedoff/pgweb]: https://hub.docker.com/r/sosedoff/pgweb/
[source code]: https://en.wikipedia.org/wiki/Source_code
[SQL]: https://en.wikipedia.org/wiki/SQL
[staging environment]: https://en.wikipedia.org/wiki/Deployment_environment#Staging
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Terminal Emulator (WebStorm)]: https://www.jetbrains.com/help/webstorm/terminal-emulator.html
[testing asynchronous code]: https://jestjs.io/docs/asynchronous
[TEXT]: https://www.postgresql.org/docs/13/datatype-character.html
[TIMESTAMP]: https://www.postgresql.org/docs/13/datatype-datetime.html
[toHaveBeenCalledWith]: https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
[trigger function]: https://www.postgresql.org/docs/13/plpgsql-trigger.html
[try...catch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
[undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[UNIQUE]: https://www.postgresql.org/docs/13/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS
[UPDATE]: https://www.postgresql.org/docs/13/sql-update.html
[user registration]: https://en.wikipedia.org/wiki/Registered_user
[UUID]: https://en.wikipedia.org/wiki/Universally_unique_identifier
[VCS]: https://en.wikipedia.org/wiki/Version_control
[virtual machine]: https://en.wikipedia.org/wiki/Virtual_machine
[Visual Studio Code]: https://code.visualstudio.com/
[Visual Studio Code: Node.js debugging]: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
[Vue.js]: https://vuejs.org/
[web server]: https://en.wikipedia.org/wiki/Web_server
[WebStorm]: https://www.jetbrains.com/webstorm/
[WebStorm: Running and debugging Node.js]: https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html
[wonderful genius]: https://twitter.com/rem
[writeHead]: https://nodejs.org/dist/latest-v14.x/docs/api/all.html#http_response_writehead_statuscode_statusmessage_headers
[YAML]: https://en.wikipedia.org/wiki/YAML

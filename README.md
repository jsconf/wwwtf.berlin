wwwtf.amsterdam
=============

The schedule page for wwwtf.amsterdam

Setup
=====

The site uses [jekyll](http://jekyllrb.com), to run the site do the following in your
terminal:

* `git clone git@github.com:pverbeek/wwwtf.amsterdam.git`
* `cd wwwtf.amsterdam`
* `gem install bundler`
* `bundle install`
* `bundle exec jekyll serve --watch`

The site should then be available on [http://localhost:4000](http://localhost:4000)

Create an event
===============

To create an event you just have to add a new markdown file to the _posts folder:

year-month-day-nameOfTheEvent.md

Use the following format:

```
---
layout:      post
title:       "My lovely meetup"
date:        2017-30-09
venue:       "The Watchtower"
time:        "3:14pm" <!-- or a string, like "evening" -->
href:        "https://meetup.of.awesomeness"
ticket:      "buy" <!-- or "sold-out", "rsvp", "free" -->
ticket_href: "https://meetup.of.awesomeness/tickets"
twitter:     "SuperDuperEvent"
---
```

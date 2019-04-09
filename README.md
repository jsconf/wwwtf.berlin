wwwtf.berlin
=============

The website for wwwtf.berlin

Setup
=====

The site uses [jekyll](http://jekyllrb.com), to run the site do the following in your
terminal:

```sh
git clone git@github.com:jsconf/wwwtf.berlin
cd wwwtf.berlin
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

The site should then be available on [http://localhost:4000](http://localhost:4000)

Create an event
===============

To create an event you just have to add a new markdown file to the _posts folder:

year-month-day-nameOfTheEvent.md

The following points are necessary:

* layout: post
* title: "name of the event"
* date: year-month-day
* venue: "name of the venue"
* ticket: "ticket status - RSVP, Register, Sold out, etc."
* time: "hours:minutesam/pm"
* href: "link to the page of the event host"

Here's a simple copy-and-paste:

```yaml
---
layout: post
title: My Event
date: 2019-05-24 20:00:00 UTC+2
venue: My office
ticket: buy
ticket_href: https://example.com/buytickets
time: 8PM - 10PM
href: https://example.com/
---
```

Other values for `ticket` are:

#### `free`

```yaml
ticket: free
```

#### `rsvp`

```yaml
ticket: rsvp
ticket_href: https://meetup.com/blahblah
```

#### `sold-out`

```yaml
ticket: sold-out
```

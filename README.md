wwwtf.berlin
=============

The website for https://wwwtf.berlin, a celebration of the web community in Berlin. If you're here, you might want to add your own event to our list! If so, feel free to read on and get started. If you need any help or if anything is unclear to you, you can always open an [issue](https://github.com/jsconf/wwwtf.berlin/issues/new).

Setup
=====

The site uses [jekyll](http://jekyllrb.com), to run the site do the following in your
terminal:

```sh
git clone https://github.com/jsconf/wwwtf.berlin
cd wwwtf.berlin
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

The site should then be available on [http://localhost:4000](http://localhost:4000)

Create an event
===============

To create an event you just have to add a new markdown file to the _posts folder:

```
year-month-day-name-of-the-event.md
```

The following points are necessary:

* `layout: post`
* `title: "name of the event"`
* `date: year-month-day 24-hr-time +timezone`
* `venue: "name of the venue"`
* `ticket: "ticket status (see below)"`
* `href: "link to the page of the event or the event host"`

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

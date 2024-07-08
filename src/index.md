---
site_title: Excited to Be Here
page_title: paggee
layout: "base.njk"
---

</br>

# Posts:

{% for post in collections.posts %}
- [{{ post.data.page_title }}](.{{ post.url }}/index.html)
{% endfor %}
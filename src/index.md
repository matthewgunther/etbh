---
site_title: "Excited to Be Here"
layout: "base.njk"
---

</br>

# Posts:

{% for post in collections.posts %}
- [{{ post.data.page_title }}{% if post.data.subtitle != "" %}: {% endif %}{{ post.data.subtitle }}](.{{ post.url }}index.html)
{% endfor %}
---
site_title: "Excited to Be Here"
layout: "base.njk"
---

</br>

# Posts:
{% assign sortedPosts = collections.posts | sort: 'data.post_date_sort' | reverse %}
{% for post in sortedPosts %}
- [{{ post.data.page_title }}{% if post.data.subtitle != "" %}: {% endif %}{{ post.data.subtitle }}](.{{ post.url }}index.html)
{% endfor %}

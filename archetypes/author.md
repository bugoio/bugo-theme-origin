---
{{ $name := split .Name "-" }}
title: {{ delimit $name | title }}
first_name: {{ index $name 0 }}
middle_name: {{ if gt ( len $name ) 2 }}{{ with ( index $name 1 ) }}{{ . }}{{ end }}{{ end }}
last_name: {{ last 1 $name }}
images: []
description:
position:
email_address:
phone:
mobile:
social_accounts: []
website:
weight: 0
---
Enter bio here
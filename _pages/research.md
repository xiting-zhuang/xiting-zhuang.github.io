---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

<!-- <style> -->
<!-- iframe { -->
<!--   height: 100%; -->
<!--   width: 175px !important; -->
<!--   display: inline; -->
<!--   vertical-align:middle; -->
<!--   margin:0px !important; -->
<!--   padding:0px !important; -->
<!--   width: 175px; -->
<!--   display: inline; -->
<!--   vertical-align:middle; -->
<!--   border: 1px solid red; -->
<!-- } -->
<!-- .col-md-3 { -->
<!--   margin:0px !important; -->
<!--   padding:0px !important; -->
<!--   overflow:hidden; -->
<!--   display: table-cell; -->
<!--   text-align:center; -->
<!--   background: white; -->
<!--   width: 175px; -->
<!--   border: 0px solid transparent; -->
<!--   border-radius:20px; -->
<!-- } -->
<!-- </style> -->

<style>
img{
  border-radius: 10px;
}
.col-md-3 {
  margin-top:10px;
  margin-bottom:10px;
  padding:0px;
  display:block;
  overflow:hidden;
  text-align:center;
  display: table-cell;
  background: white;
  border-radius: 20px;
  height: auto;
  <!-- border: 1px solid black; -->
}
iframe {
  margin:0;
  padding:0;
  width: 175px;
  display: inline;
  vertical-align: middle;
}
</style>

  <!-- border: 5px solid red; -->
  <!-- margin-bottom:5px; -->
  <!-- margin-left:5px; -->
  <!-- float: none; -->

## Research
 

<div class="jumbotron">
<div class="row align-items-end">
<div class="col-md-9 col-sm-12">
 <h4>Therapy design via adjoint-based optimization</h4>
Designing medical therapies requires efficient optimization algorithms. 
Current methods fail to account for the _material interfaces_ or _shock waves_ that occur during treatments like lithotripsy and histotripsy.
I created an adjoint-based technique for navigating these complications and computes the gradient-based information required for such <a href="{{ site.url }}{{ site.baseurl }}/papers/bryngelson-xpacc18.pdf" target="_blank">optimization and sensitivity analysis</a>.
Coupling with <a href="{{ site.url }}{{ site.baseurl }}/software/" target="_blank">PlasCom2</a> provides a full optimization framework for medical therapies and devices.
</div>
<div class="col-md-3 col-sm-12" style="background-color:transparent" >
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/lithotripsy.jpg" width="175px"/>
</div>
</div>
</div>

 

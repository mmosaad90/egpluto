hashtags=jQuery.noConflict();hashtags(document).ready(function(e,n){"use strict";var t,o=window.location.origin,r=n.querySelectorAll(".post-body");if(0<r.length)for(t=0;t<r.length;t+=1)r[t].innerHTML=r[t].innerHTML.replace(/#(\S+)/g,'<a class="hashtags" href="'+o+'/search?q=$1">#$1</a>')}(0,this.document));
 

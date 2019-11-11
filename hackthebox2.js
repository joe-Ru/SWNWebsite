<
!DOCTYPE html > < html lang = "en" > < head > < meta charset = "utf-8" > < meta http - equiv = "X-UA-Compatible"
content = "IE=edge" > < meta name = "viewport"
content = "width=device-width, initial-scale=1" > < meta name = "description"
content = "Entry challenge for joining Hack The Box. You have to hack your way in!" / > < meta name = "keywords"
content = "pen testing,hack,hacking,penetration testing,infosec,information security,labs" > < meta name = "author"
content = "Hack The Box" > < meta name = "google-site-verification"
content = "ut2KvZ-Bku4Vdbk1hfkkiX6W_Gb_9-CR9UD8ZU4B0mU" / > < meta property = "og:title"
content = "Can you hack this box?" / > < meta property = "og:url"
content = "https://www.hackthebox.eu" / > < meta property = "og:image"
content = "https://www.hackthebox.eu/images/favicon.png" / > < meta property = "og:site_name"
content = "Hack The Box" / > < meta property = "fb:app_id"
content = "269224263502219" / > < meta property = "og:description"
content = "An online platform to test and advance your skills in penetration testing and cyber security." / > < meta name = "csrf-token"
content = "kFtXbZf1KDjSCZ0c1x0BfOct48KXkhkyHPzYrJdg" > < meta name = "wot-verification"
content = "1eeefbec1f6305acd476" / > < script type = 'application/ld+json' > {
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": "https://www.hackthebox.eu",
    "name": "Hack The Box",
    "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+44-203-6178-265",
        "contactType": "emergency"
    }],
    "sameAs": ["https://www.facebook.com/hackthebox.eu", "https://www.linkedin.com/company/hackthebox", "https://twitter.com/hackthebox_eu"],
    "logo": "https://www.hackthebox.eu/images/favicon.png",
    "description": "An online platform to test and advance your skills in penetration testing and cyber security.",
    "founder": {
        "@type": "Person",
        "name": "Haris Pylarinos"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.94",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "650"
    }
} < /script> <title>Hack The Box :: Can you hack this box?</title > < link rel = "canonical"
href = "https://www.hackthebox.eu/invite" / > < style > .native - ad# _default_ {
        position: relative;padding: 10 px 10 px;background: repeating - linear - gradient(-45 deg, transparent, transparent 5 px, hsla(0, 0 % , 0 % , .05) 5 px, hsla(0, 0 % , 0 % , .05) 10 px) hsla(203, 11 % , 23 % , 0.5);font - size: 14 px;line - height: 1.5;
    }.native - ad# _default_: after {
        position: absolute;bottom: 0;left: 0;overflow: hidden;width: 100 % ;border - bottom: solid 4 px #9acc15; content: ""; transition: all .2s ease-in-out; transform: scaleX(0); } .native-ad # _default_: hover: after {
            transform: scaleX(1);
        }.native - ad.default-ad {
            display: none;
        }.native - ad._default_ {
            display: inline;overflow: hidden;
        }.native - ad._default_ > * {
            vertical - align: middle;
        }.native - ad a {
            color: inherit;text - decoration: none;
        }.native - ad a: hover {
            color: inherit;
        }.native - ad.default-image {
            display: none;
        }.native - ad.default-title,
        .native - ad.default-description {
            display: inline;line - height: 1;
        }.native - ad.default-title {
            position: relative;margin - right: 8 px;font - weight: 600;
        }.native - ad.default-title: before {
            position: absolute;top: -23 px;padding: 4 px 6 px;border - radius: 3 px;background - color: #9acc15; color: # fff;content: "Sponsor";text - transform: uppercase;font - weight: 600;letter - spacing: 1 px;font - size: 10 px;line - height: 1;
        } < /style> <link rel="stylesheet" href="https:/ / www.hackthebox.eu / css / htb - frontend.css " /> <link rel="
        stylesheet " href="
        https: //www.hackthebox.eu/css/icons.css" /> <link rel="icon" href="/images/favicon.png"> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-757546894"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-757546894'); </script> </head> <body class="blank" style="overflow-y:hidden; "> <script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-93577176-1', 'auto'); ga('set','anonymizeIp',true); ga('send', 'pageview'); </script> <div class="wrapper"> <section class="content" style="margin:0px; padding:0px;"> <div class="container-center centerbox"> <div class="view-header"> <div class="header-icon"> <i class="pe page-header-icon pe-7s-smile"></i> </div> <div class="header-title"> <h3>Hi!</h3> <small> Feel free to hack your way in :) </small> </div> </div> <div class="panel panel-filled"> <div class="panel-body"> <form action="https://www.hackthebox.eu/invite" id="verifyForm" method="post"> <input type="hidden" name="_token" value="kFtXbZf1KDjSCZ0c1x0BfOct48KXkhkyHPzYrJdg"> <div class="form-group "> <label class="control-label" for="code">Invite Code</label> <input type="text" title="Please enter your invite code" required="" value="" name="code" id="code" class="form-control"> <span class="help-block small"></span> </div> <div> <button class="btn btn-accent">Sign Up</button> </div> </form> </div> </div> <span class="help-block small text-center">If you are already a member click <a href="https://www.hackthebox.eu/login">here</a> to login.</span> <br> <div class="native-ad"></div> <script> (function(){ if(typeof _bsa !== 'undefined' && _bsa) { _bsa.init('default', 'CKYDLKJJ', 'placement:hacktheboxeu', { target: '.native-ad', align: 'horizontal', disable_css: 'true' }); } })(); </script> </div> <div class="particles_full" id="particles-js"></div> </section> </div> <script src="https://www.hackthebox.eu/js/htb-frontend.min.js"></script> <script defer src="/js/inviteapi.min.js"></script> <script defer src="https://www.hackthebox.eu/js/calm.js"></script> </body> </html>
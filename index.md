# Two-Factor Authentication? What the F**k?

So you want to know about Two-Factor Authentication (2FA)? Or do you really? Maybe a friend just gave you this link. Well whatever it is you are now here. You might as well learn something! We hope to make this as boring as possible but just to be safe...have a look at this cute animal Gif first (and yes it's Gif not Gif):

![](http://i.giphy.com/3xz2BCohVTd7h2Kvfi.gif)

Alright I hope I got your attention back. Let's talk 2FA! 

## What does Two-Factor Authentication mean?

2FA is a security process that involves a user proving their identity with two different forms of identification. There are typically three different types of identification:
- Something you know
- Something you have
- Something you are

Sounds weird? Think about the last time you withdrew money from an ATM. That was most likely using 2FA. You provided a bank card - something that you have - and a PIN - something that you know. This way the bank tries to make sure that someone needs to get hold of both in order to pretend they are you. 

## Why do I need 2FA?

Imagine someone would just need those 4 digits of your PIN? But then again your 4 digits are hopefully random and not your birthday or the one of someone close to you. So that might be still safe(ish).

But now comes the problem. The web! For an attacker to attack your bank account they need to go to a physical ATM that has hopefully some survaillance going on. And for a burglar to break into your house they need to find your house and pick the lock. But for your online profiles attackers can be anywhere, easily hide themselves and on top of that have way better tools to "pick your lock" aka hack your password.

That sounds bad but it might come worse. You might be using a terrible password! In fact quite a lot of people do. And hackers are aware of that. Just look at this top 10 of passwords from 2015 provided by [SplashData](https://www.teamsid.com/worst-passwords-2015/) and is based on **2 million leaked passwords**:

1. 123456
2. password
3. 12345678
4. qwerty
5. 12345
6. 123456789
7. football
8. 1234
9. 1234567
10. baseball

Is yours among them? Yes? Better change it quickly! We'll wait here. 

Is yours not among them? Great! Or sort of. You might still be using a weak password. The folks over at [Dropbox developed a great password strength tester](https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/). You can use it below to test your password. And no worries we won't store your password or send it somewhere.

<div id="strengthTest"></div>

Alright hopefully you have a safe password now. But I must disappoint you (again). That alone doesn't protect you from the evil that is on the internet. You know people like this guy:

![](http://i.giphy.com/YQitE4YNQNahy.gif)

Why? Because hackers might not have to crack your password. Most hackers are good at what is called ["Social Engineering"](https://en.wikipedia.org/wiki/Social_engineering_(security)). This means they might be gaining access to your account without ever cracking your password. Take Matt Honan as an example. In 2012, he got his whole digital life destroyed because he didn't have 2FA enabled. But don't take it from a random website like this but rather from the person who got attacked himself: [How Apple and Amazon Security Flaws Led to My Epic Hacking](http://www.wired.com/2012/08/apple-amazon-mat-honan-hacking/).

## Scared?

Alright so you might be scared now. Well good! The internet is a dangerous place. But please don't go ahead and just unplug your internet and throw away your smartphone. We are here for you! This website's whole purpose is 2FA. So who would we be if we would let you down and now teach you how to use 2FA! 

#### [How to use 2FA](/use)

## Are you a developer?

#### [Learn how to implement 2FA on your service!](/implement) 
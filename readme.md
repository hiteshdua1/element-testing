### Element Testing
##### Description :
This aims to get the cropped image of the selected DOM node by it's unique selector. This would help us screenshot specific nodes at the time of creation of some selectors and we can validate later on , making Automation tests, to see if we broke a selector or not by comaparing the screenshots at the time of creation.

 This would be more of an Automation Tests validation framework, which is extensible as well as dynamic.

 We would need to cater to the original screenshots with id of the selector + unique name, so that next time these AT's run, we do a `pixel` comparison of what has changed and could notify the end user by breaking changes in their `selectors`.
 
 ###### Todo :
 
- [ ] Pixel framework to compare screenshots
 
- [ ] DB/localstorage to map screenshots with selectors
 
- [ ] Integrating the above 2.

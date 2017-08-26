# Page
A Page is a component which is used as a Page
Every Page is a component but every component is not a Page.
These are full views/screens instead of partials from any view/page.
Partials are be components.
Views are Pages.

We can generate ionic page using cli with below command.
ionic generate page <page-name>

We can even generate pages manually.
We can even nest the pages - which is currently not possible using ionic cli.

# Page Stack

Pages are impleted in Ionic in stack format
        Page1 - top and bottom of stack
push a page on Page1 we get
        Page2   - top of stack
        Page1   - bottom of stack
push another page
        Page3   - top of stack
        Page2
        Page1   - bottom of stack

Now if we pop a page from above stack it will display Page2 an dstack will be like below,
        Page2   - top of stack
        Page1   - bottom of stack

We can use popToRoot() which will take us to the bottom of the stack and will remove all i.e. pop out all pages above Root page. And our stack will look like below,
        Page1 - top and bottom of stack

With the react router component now browser back button works
Used - BrowserRouter | Link | Route

React Router components -
1st component <BrowserRouter>
    You wrap the complete app in BrowserRouter so that path changes can be reflected

How do you wrap inside BrowserRouter
    <BrowserRouter> 
 <App /> 
</BrowserRouter>

Once you wrap your complete app then Browser Router will listen to the changes in the URL

2nd Component <LINK>
<Link>
The primary way to allow users to navigate around your application. <Link> will render a fully accessible anchor tag with the proper href.
Syntax 
<Link to="/search"
 >Add a book
</Link>

3rd Component  <Route>
This component will check if the browser path matches to some URL(Link URL) or not, if the path matches then it will render the UI corresponding to the the URL matched.


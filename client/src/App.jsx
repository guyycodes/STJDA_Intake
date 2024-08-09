import React, { useEffect } from 'react';
import { LandingPage } from './screens/Home/Landing';
// import { ProfileContainer } from './screens/PostAuthentication/ProfileContainer';
// import { ProfileRedirect, EditProfileRedirect, Logout } from './screens/Login/Redirects';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { SignUpSection, Error401, Error409 } from './screens/Login';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { CampRegistrationPage } from './screens/Home/sections/Registration/CampRegistration';
// Set up an Apollo client to point towards graphql backend
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // GraphQL endpoint
});
// // redis browser url: http://localhost:8001/redis-stack/browser
// context for JWT
const authLink = setContext((_, { headers }) => {
  // Get token from local storage
  const token = localStorage.getItem('STJDA');
  // Return the headers to the context
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// httpLink defines where the GraphQL server is hosted. 
// authLink used for setting any headers that need to be attached to your requests.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy(currentFetchPolicy) {
        if (
          currentFetchPolicy === 'network-only' ||
          currentFetchPolicy === 'cache-and-network'
        ) {
          // Demote the network policies (except "no-cache") to "cache-first"
          // after the first request.
          return 'cache-first';
        }
        // Leave all other fetch policies unchanged.
        return currentFetchPolicy;
      },
    },
  },
});
client.clearStore();

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* to-do finsih responsive styling for mobile/tablets */}
        <Route path="/" index element={<LandingPage />} />
        {/* Registration route */}
        <Route path="/registration" element={<CampRegistrationPage/>} />
          {/* to-do */}
          {/* to-do finsih responsive styling for mobile/tablets */}
          {/* <Route path="/login" element={<SignUpSection />} /> */}
          {/* // redirections */}
          {/* <Route path="/profile" element={<ProfileRedirect />} /> */}
          {/* <Route path="/edit/redirect" element={<EditProfileRedirect />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}
          {/* Profile page Route */}
          {/* <Route path="/profile/authenticated" element={<ProfileContainer />} /> */}
          {/* error pages */}
          {/* <Route path="/error=emailNotVerified" element={<Error401/>} /> */}
          {/* <Route path="/error=Conflict" element={<Error409 />} /> */}
          {/* Reviews page Route */}
          {/* <Route path="/reviews" element={<ProtectedRoutes element={<Reviews />} />} /> */}

          {/* Privacy Policy Route */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          {/* Terms of use Route */}
          {/* <Route path="/terms" element={<TermsAndConditions />} /> */}
      </>
      )
    )

  return (
    <>
     
     <ApolloProvider client={client}>
        <RouterProvider router={router}/> 
      </ApolloProvider>
   
    </>
  );
}

export default App;

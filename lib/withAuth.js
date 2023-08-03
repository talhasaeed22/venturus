// withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const signedInUser = useSelector((state) => state.signedInUser);

    useEffect(() => {
      if (!signedInUser) {
        router.push('/sign-in');
      }
    }, [signedInUser, router]);

    return signedInUser ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;

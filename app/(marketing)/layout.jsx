
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const MarketingLayout = ({ children }) => {
  const { userId } = auth();

  if (userId) {
    // Redirect to "/main" if the user is authenticated
    redirect('/main');
    
    return null; // You can also return null to prevent rendering anything in this layout
  }

  return (
    <div id="main-page" className="relative">
      {children}
    </div>
  );
};

export default MarketingLayout;

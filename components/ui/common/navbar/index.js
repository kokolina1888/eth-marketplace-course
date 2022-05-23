import Link from 'next/link'
import { useWeb3 } from '@components/providers/web3' 
import { Button } from '@components/ui/common';
import { useAccount } from '@components/web3/hooks/useAccount';


export default function Footer() {
  const { connect, isLoading, isWeb3Loaded, web3, hooks  } = useWeb3();
  const { account } = useAccount();
  
  return (

    <section>  
    {account}
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/" 
              >
                <a  
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link
                href="/" 
              >
                <a  
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link
                href="/" 
              >
                <a  
                  className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link> 
            </div>
            <div> 
              <Link
                href="/" 
                >
                <a  

                  className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>
              { isLoading ? 
                <Button
                  disabled={true}
                  onClick={connect} 
                >
                  Loading...
                </Button> :  
                  isWeb3Loaded ?
                    account ?
                    <Button  
                      className='cursor-default'
                      hoverable={false}
                    >
                      Hi, there
                    </Button>  :
                    <Button 
                      onClick={connect}
                    >
                      Connect
                    </Button> :
                  <Button
                  onClick={()=>window.open('https://metamask.io/download/')}
                >
                  Install Metamask
                </Button>  
              }
             
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

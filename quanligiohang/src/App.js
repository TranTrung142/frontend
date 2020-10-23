import React from 'react';

import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';


function App() {
    return (
        <div>
            {/* Header */}
            <Header />
            <main id="mainContainer">
                <div className="container">
                    {/* ProductsContainer */}
                    <ProductsContainer />
                    {/* Message */}
                    <MessageContainer />
                    {/* Cart */}
                    <CartContainer />
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>

    );
}

export default App;

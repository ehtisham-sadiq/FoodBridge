/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import rank1 from '../images/1.jpg'
import rank2 from '../images/2.jpg'
import rank3 from '../images/3.jpg'
import donor_1 from '../images/donor_1.jpg'
import donor_2 from '../images/donor_2.jpg'
import donor_3 from '../images/donor_3.jpg'
import rec_1 from '../images/rec_1.jpg'
import rec_2 from '../images/rec_2.jpg'
import rec_3 from '../images/rec_3.jpg'
import donation from '../images/donation.png'
import food from '../images/food.png'

const DisplayContributors = props => {

    return (
        <div>
            <Header />
            <hr />
            <h3 className="text-center text-dark" style={{ fontFamily: 'monaco' }}><img src={donation} alt="image" style={{ width: 60, height: 50, paddingRight: '5px' }} />Top Donors Contributors<img src={donation} alt="image" style={{ width: 60, height: 50, paddingLeft: '5px' }} /></h3>
            <hr />
            <div className="row mt-5">
                <div className="col-1 text-center"></div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-4 card">
                    <img src={donor_1} alt="image" />
                    <h5 className="text-center mt-1 text-secondary" style={{ fontFamily: 'monaco' }}>Ngo 1</h5>
                    <p><img src={rank1} alt="image" style={{ width: 80, height: 70 }} /></p>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center card">
                    <img src={donor_2} alt="image" />
                    <h5 className="text-center mt-1 text-warning" style={{ fontFamily: 'monaco' }}>Person 1</h5>
                    <p><img src={rank2} alt="image" style={{ width: 100, height: 90 }} /></p>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-5 card">
                    <img src={donor_3} alt="image" />
                    <h5 className="text-center mt-1" style={{ fontFamily: 'monaco' }}>Hotel 1</h5>
                    <p><img src={rank3} alt="image" style={{ width: 60, height: 55 }} /></p>
                </div>
                <div className="col-1 text-center"></div>
            </div>

            <p className="mt-5"></p>
            <hr />
            <h3 className="text-center text-dark" style={{ fontFamily: 'monaco' }}><img src={food} alt="image" style={{ width: 60, height: 50, paddingRight: '5px' }} />Top Recipient Contributors<img src={food} alt="image" style={{ width: 60, height: 50, paddingLeft: '5px' }} /></h3>
            <hr />
            <div className="row mt-5 mb-5">
                <div className="col-1 text-center"></div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-4 card">
                    <img src={rec_1} alt="image" />
                    <h5 className="text-center mt-1 text-secondary" style={{ fontFamily: 'monaco' }}>Ngo 2</h5>
                    <p><img src={rank1} alt="image" style={{ width: 80, height: 70 }} /></p>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center card">
                    <img src={rec_2} alt="image" />
                    <h5 className="text-center mt-1 text-warning" style={{ fontFamily: 'monaco' }}>Hotel 2</h5>
                    <p><img src={rank2} alt="image" style={{ width: 100, height: 90 }} /></p>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-5 card">
                    <img src={rec_3} alt="image" />
                    <h5 className="text-center mt-1" style={{ fontFamily: 'monaco' }}>Person 2</h5>
                    <p><img src={rank3} alt="image" style={{ width: 60, height: 55 }} /></p>
                </div>
                <div className="col-1 text-center"></div>
            </div>
            <Footer />
        </div>
    );
};

export default DisplayContributors;

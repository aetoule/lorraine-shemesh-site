import React from 'react';
import '../index.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
// import 'bootstrap/dist/c ss/bootstrap.min.css';

import Navigation from './navigation/Navigation'
import NotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Biography from './pages/Biography';
import Video from './pages/Video';
import Studio from './pages/Studio';
import Exhibitions from './pages/Exhibitions';
import Exhibition_tsbu_nyc from './pages/Exhibitions/Exhibition_tsbu_nyc';
import Exhibition_tsbu_sf from './pages/Exhibitions/Exhibition_tsbu_sf';
import Exhibition_butler from './pages/Exhibitions/Exhibition_butler';
import Exhibition_intersections from './pages/Exhibitions/Exhibition_intersections';
import Exhibition_insideout from './pages/Exhibitions/Exhibition_insideout';
import Exhibition_insideout_slideshow from './pages/Exhibitions/Exhibition_insideout_slideshow';
import TestBreakingTheSurface from './pages/Paint/TestBreakingTheSurface';
import IndividualImage from './pages/IndividualImage';
import IndividualPhoto from './pages/IndividualPhoto';
import SpaceBetweenUs from './pages/Paint/SpaceBetweenUs';
import Intersections from './pages/Paint/Intersections';
import InsideOut from './pages/Paint/InsideOut';
import BreakingTheSurface from './pages/Paint/BreakingTheSurface';
import liquidStates from './pages/Paint/LiquidStates';
import WaterWorks from './pages/Paint/WaterWorks';
import PaintedPools from './pages/Paint/PaintedPools';
import paperPools from './pages/Paper/PaperPools';
import paperSBU from './pages/Paper/PaperSBU';
import paperInt from './pages/Paper/PaperInt';
import paperObj from './pages/Paper/PaperObj';
import clayHB from './pages/Clay/ClayHB';
import clayWT from './pages/Clay/ClayWT';
import claySC from './pages/Clay/ClaySC';
import Words from './/pages/Words';
import biblio_balakian from './pages/Words/biblio_balakian';
import biblio_zona_2016 from './pages/Words/biblio_zona_2016';
import biblio_purcell from './pages/Words/biblio_purcell';
import biblio_davis from './pages/Words/biblio_davis';
import biblio_mccarthy from './pages/Words/biblio_mccarthy';
import biblio_mccormack2 from './pages/Words/biblio_mccormack2';
import biblio_cheng from './pages/Words/biblio_cheng';
import biblio_shemesh1 from './pages/Words/biblio_shemesh1';
import biblio_kennedy from './pages/Words/biblio_kennedy';
import biblio_zona from './pages/Words/biblio_zona';
import biblio_stone from './pages/Words/biblio_stone';
import biblio_goodman from './pages/Words/biblio_goodman';
import biblio_mccormack from './pages/Words/biblio_mccormack';
import biblio_little from './pages/Words/biblio_little';
import biblio_bascove from './pages/Words/biblio_bascove';
import biblio_stone_pool_image from './pages/Words/ImagePages/biblio_stone_pool_image';
import biblio_stone_cakes from './pages/Words/ImagePages/biblio_stone_cakes';
import biblio_stone_bagels_and_lox from './pages/Words/ImagePages/biblio_stone_bagels_and_lox';
import biblio_stone_donuts from './pages/Words/ImagePages/biblio_stone_donuts';
import biblio_stone_pastries from './pages/Words/ImagePages/biblio_stone_pastries';
import biblio_goodman_study from './pages/Words/ImagePages/biblio_goodman_study';
import biblio_little_shoes from './pages/Words/ImagePages/biblio_little_shoes';
import biblio_little_three_hearts from './pages/Words/ImagePages/biblio_little_three_hearts';
import biblio_little_menagerie from './pages/Words/ImagePages/biblio_little_menagerie';
import biblio_little_cyclone from './pages/Words/ImagePages/biblio_little_cyclone';

function App() {
    return (
        <Router>
            <div className="App">
                <SimpleReactLightbox>
                    <div className="site-content">
                        <Navigation />
                        <div className="page-content">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/spaceBetweenUs/:image?" component={SpaceBetweenUs} />
                                <Route path="/intersections" component={Intersections} />
                                <Route path="/insideOut" component={InsideOut} />
                                <Route path="/breakingTheSurface" component={BreakingTheSurface} />
                                <Route path="/liquidStates" component={liquidStates} />
                                <Route path="/waterWorks" component={WaterWorks} />
                                <Route path="/paintedPools" component={PaintedPools} />
                                <Route path="/paperPools" component={paperPools} />
                                <Route path="/paperSpaceBetweenUs" component={paperSBU} />
                                <Route path="/paperIntersections" component={paperInt} />
                                <Route path="/paperObjects" component={paperObj} />
                                <Route path="/clayHandBuilt" component={clayHB} />
                                <Route path="/clayWheelThrown" component={clayWT} />
                                <Route path="/claySlipcast" component={claySC} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/biography" component={Biography} />
                                <Route path="/video" component={Video} />
                                <Route path="/studio" component={Studio} />
                                <Route path="/words" component={Words} />
                                <Route path="/biblio_balakian" component={biblio_balakian} />
                                <Route path="/biblio_zona_2016" component={biblio_zona_2016} />
                                <Route path="/biblio_purcell" component={biblio_purcell} />
                                <Route path="/biblio_bascove" component={biblio_bascove} />
                                <Route path="/biblio_davis" component={biblio_davis} />
                                <Route path="/biblio_mccarthy" component={biblio_mccarthy} />
                                <Route path="/biblio_mccormack2" component={biblio_mccormack2} />
                                <Route path="/biblio_cheng" component={biblio_cheng} />
                                <Route path="/biblio_shemesh1" component={biblio_shemesh1} />
                                <Route path="/biblio_kennedy" component={biblio_kennedy} />
                                <Route path="/biblio_zona" component={biblio_zona} />
                                <Route path="/biblio_stone" component={biblio_stone} />
                                <Route path="/biblio_goodman" component={biblio_goodman} />
                                <Route path="/biblio_goodman_study" component={biblio_goodman_study} />
                                <Route path="/biblio_stone_pool_image" component={biblio_stone_pool_image} />
                                <Route path="/biblio_stone_cakes" component={biblio_stone_cakes} />
                                <Route path="/biblio_stone_donuts" component={biblio_stone_donuts} />
                                <Route path="/biblio_stone_pastries" component={biblio_stone_pastries} />
                                <Route path="/biblio_stone_bagels_and_lox" component={biblio_stone_bagels_and_lox} />
                                <Route path="/biblio_mccormack" component={biblio_mccormack} />
                                <Route path="/biblio_little" component={biblio_little} />
                                <Route path="/biblio_little_shoes" component={biblio_little_shoes} />
                                <Route path="/biblio_little_three_hearts" component={biblio_little_three_hearts} />
                                <Route path="/biblio_little_menagerie" component={biblio_little_menagerie} />
                                <Route path="/biblio_little_cyclone" component={biblio_little_cyclone} />
                                <Route path="/exhibitions" component={Exhibitions} />
                                <Route path="/exhibition_tsbu_nyc" component={Exhibition_tsbu_nyc} />
                                <Route path="/exhibition_tsbu_sf" component={Exhibition_tsbu_sf} />
                                <Route path="/exhibition_butler" component={Exhibition_butler} />
                                <Route path="/exhibition_intersections" component={Exhibition_intersections} />
                                <Route path="/Exhibition_insideout" component={Exhibition_insideout} />
                                <Route path="/Exhibition_insideout_slideshow" component={Exhibition_insideout_slideshow} />

                                <Route path="/testBreakingTheSurface" component={TestBreakingTheSurface} />

                                <Route path="/exh/:id" component={IndividualPhoto} />
                                <Route path="/exh_sshow/:id" component={IndividualPhoto} />
                                <Route path="/:id" component={IndividualImage} />
                                <Route path="/:gallery/:id" component={IndividualImage} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </SimpleReactLightbox>
            </div>
        </Router>
    );
}

export default App;
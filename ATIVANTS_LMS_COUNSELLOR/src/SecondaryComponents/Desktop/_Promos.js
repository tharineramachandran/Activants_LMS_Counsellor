import React, { useEffect } from 'react';
import { Search, Grid, Icon, Image, Header, Segment } from 'semantic-ui-react';
import promo1 from '../../Static/Images/promo1.png';
import promo2 from '../../Static/Images/promo2.png';
import promo3 from '../../Static/Images/promo3.png';
import promo4 from '../../Static/Images/promo4.png';

const _MovieGenres = props => {

    return (
        <React.Fragment>
                <center>
                    <Grid relaxed='very' columns={4} style={{ width: '90%' }}>
                        <Grid.Column className="PromoColumnGrid">
                            <center className="CustomPromo">
                                <Image src={promo1} size="tiny" className="sizeOfPromos" />
                                <p>The Quick Brown Fox Jumps Over The Lazy Dog..</p>
                                <button className="PromoBtn btn1">Promo 1</button>
                            </center>
                        </Grid.Column>

                        <Grid.Column className="PromoColumnGrid">
                            <center className="CustomPromo">
                                <Image src={promo2} size="tiny" className="sizeOfPromos" />
                                <p>The Quick Brown Fox Jumps Over The Lazy Dog..</p>
                                <button className="PromoBtn btn2">Promo 2</button>
                            </center>
                        </Grid.Column>

                        <Grid.Column className="PromoColumnGrid">
                            <center className="CustomPromo">
                                <Image src={promo3} size="tiny" className="sizeOfPromos" />
                                <p>The Quick Brown Fox Jumps Over The Lazy Dog..</p>
                                <button className="PromoBtn btn3">Promo 3</button>
                               
                            </center>
                        </Grid.Column>

                        <Grid.Column className="PromoColumnGrid">
                            <center className="CustomPromo">
                                <Image src={promo4} size="tiny" className="sizeOfPromos" />
                                <p>The Quick Brown Fox Jumps Over The Lazy Dog..</p>
                                <button className="PromoBtn btn4">Promo 4</button>
                            </center>
                        </Grid.Column>
                    </Grid>
                </center>
            <br />
        </React.Fragment>
    )
}
export default _MovieGenres
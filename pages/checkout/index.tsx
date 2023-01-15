import { NextPage } from 'next';
import React from 'react';
import Layout from '../../components/layout';
import PageSwitchAnimation from '../../components/PageSwitchAnimation';
import Card from '../../components/ui/Card';
import Image from 'next/image';
import Button from '../../components/ui/Button';

const Checkout: NextPage = () => {
  return (
    <Layout pageTitle="Checkout">
      <PageSwitchAnimation />

      <section className="mx-auto max-w-screen-xl px-4">
        <form className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-24">
            <fieldset>
              <div className="grid gap-2">
                <legend>Contact information</legend>

                <div className="grid">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div className="grid gap-2">
                <legend>Shipping information</legend>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email">First name</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div>
                    <label>Last name</label>
                    <input type="text" id="lname" name="lname" />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div className="grid gap-2">
                <legend>Delivery method</legend>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <div>
                      <div className="flex justify-between gap-2">
                        <label htmlFor="dstandard">Standard</label>
                        <input
                          type="checkbox"
                          name="dstandard"
                          id="dstandard"
                          value="standard"
                        />
                      </div>

                      <p>4-10 business days</p>
                    </div>

                    <p>$5.00</p>
                  </Card>

                  <Card>
                    <div>
                      <div className="flex justify-between gap-2">
                        <label htmlFor="dexpress">Express</label>
                        <input
                          type="checkbox"
                          name="dexpress"
                          id="dexpress"
                          value="express"
                        />
                      </div>

                      <p>2-5 business days</p>
                    </div>

                    <p>$16.00</p>
                  </Card>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div className="grid gap-4">
                <legend>Payment</legend>

                <div className="grid gap-4">
                  <div className="flex gap-4">
                    <Card className="flex gap-2">
                      <input
                        type="checkbox"
                        name="pcreditcard"
                        id="pcreditcard"
                        value="creditcard"
                      />
                      <label htmlFor="pcreditcard">Credit card</label>
                    </Card>

                    <Card className="flex gap-2">
                      <input
                        type="checkbox"
                        name="ppaypal"
                        id="ppaypal"
                        value="paypal"
                      />
                      <label htmlFor="ppaypal">PayPal</label>
                    </Card>

                    <Card className="flex gap-2">
                      <input
                        type="checkbox"
                        name="petransfer"
                        id="petransfer"
                        value="etransfer"
                      />
                      <label htmlFor="petransfer">eTransfer</label>
                    </Card>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email">Card number</label>
                    <input type="text" id="cardnumber" name="cardnumber" />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email">Name on card</label>
                    <input type="text" id="nameoncard" name="nameoncard" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="col-span-2 grid gap-2">
                      <label htmlFor="expirationdate">
                        Expiration date (MM/YYYY)
                      </label>
                      <input
                        type="text"
                        id="expirationdate"
                        name="expirationdate"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="cvc">CVC</label>
                      <input type="text" id="cvc" name="cvc" />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="grid items-start justify-start gap-4 self-start">
            <h1>Order summary</h1>

            <div className="relative h-96 w-96">
              <Image
                src="/images/product/nintendo-switch-mario-strikers-battle-league-football-cover.png"
                alt="Mario Strikers: Battle League Football Cover"
                className="object-contain"
                layout="fill"
              />
            </div>

            <Button variant="contained" className="text-center">
              Confirm order
            </Button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Checkout;

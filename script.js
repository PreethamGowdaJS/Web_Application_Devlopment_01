<!DOCTYPE html>
<html land="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content = "width=device-width,intial-scale=1.0">
        <title>IPL TICKET BOOKING</title>
        <linke rel="Stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>IPL TICKET BOOKING</h1>
            <nav>
                <a href="#matches">Matches</a>
                <a href="#Booking">Book Ticket</a>
                <a href="#mybookings">My Bookings</a>
                <a href="#guidelines">Guidelines</a>
            </nav>
        </header>
        <section>
            <h2>Experience The Stadium Energy Live!</h2>
            <p>Book your tickets and enjoy exciting IPL matches.</p>
            <a href="#matches"><button>View Schedule</button></a>
            <a href="#booking"><button>Book Ticket</button></a>
        </section>


        <section>
            <h2>About IPL 2026</h2>
            
            <h3>Popular Teams</h3>
            <ul>
                <li>Royal Challengers Bengaluru</li>
                <li>Chennai Super Kings</li>
                <li>Mumbai Indains</li>
                <li>Sunrisers Hyderbad</li>
            </ul>

            <h3>Match Venues</h3>
            <ul>
                <li>M.Chinnaswamy Stadium</li>
                <li>Wankhede Stadium</li>
                <li>MA Chidambaram Stadium</li>
            </ul>
        </section>

        <section id="matches">
            <h2>Match Schedule</h2>

            <label>Filter by Team:</label>
            <select>
                <option>All Teams</option>
                <option>RCB</option>
                <option>CSK</option>
                <option>MI</option>
               
            </select>


            <table border="1">
                <tr>
                    <th>Match No.</th>
                    <th>Teams</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Premium</th>
                    <th>VIP</th>
                    <th>Action</th>
                </tr>


                <tr>
                    <td>1</td>
                    <td>RCB vs CSK</td>
                    <td>05 April 2026</td> 
                    <td>Bengaluru</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>5000</td>  
                    <td><a href="#booking">Book</a></td>             
                </tr>

                <tr>
                    <td>2</td>
                    <td>MI vs RCB</td>
                    <td>08 April 2026</td>
                    <td>Mumbai</td>
                    <td>900</td>
                    <td>2500</td>
                    <td>6000</td>
                    <td><a href="#booking">Book</a></td>
                </tr>
            </table>
        </section>

        <section id="booking">
            <h2>Ticket Booking Form</h2>

            <form>
                <label>Match:</label>
                <select>
                    <option>RCB vs CSK</option>
                    <option>MI vs RCB</option>
                </select>
                <br><br>

                <label>Stand category:</label>
                <select>
                    <option>General</option>
                    <option>Premium</option>
                    <option>VIP</option>
                </select>
                <br><br>

                <label>Name:</label>
                <input type="text" required>
                <br><br>

                <label>Email:</label>
                <input type="email" required>
                <br><br>

                <label>Phone Number:</label>
                <input type="tel" required>
                <br><br>

                <button type="submit">Book Now</button>
            </form>

            <h3>Booking Summary</h3>
            <p>Match: RCB vs CSK</p>
            <p>Stand: General</p>
            <p>Ticket price: 800rupees</p>
            <p>Total Amount: 800rupees</p>
        </section>

        <section id="mybooking">
            <h2>My Ticket Bookings</h2>


            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Match</th>
                    <th>Tickets</th>
                    <th>Amount</th>
                </tr>
            </table>
            <p>No bookings available</p>
        </section>

        <section id="guidelines">
            <h2>Guidelines</h2>

            <h3>Ticket verification</h3>
            <p>Carry your valid ticket for entry.</p>

            <h3>ID Proof Requirement</h3>
            <p>Carry a valid photo ID.</p>


            <h3>Prohibited Items</h3>
            <p>Do not carry prohibited items into the stadium.</p>
        </section>

        <footer>
            <p>&copy; 2026 IPL TICKET BOOKING</p>
        </footer>


    </body>
</html>
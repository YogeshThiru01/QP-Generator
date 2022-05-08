import React from "react";
import "./styles/previewStyle.css";
const Preview = () => {
  return (
    <>
      <h4 class="text_center font">ANNA UNIVERSITY(UNIVERSITY DEPARTMENTS)</h4>
      <h4 class="text_center font">END SEMESTER EXAMINATIONS-NOV/DEC 2022</h4>
      <p class="align_text font">NAME OF THE BRANCH</p>
      <p class="align_text font">Semester</p>
      <p class="align_text bold font">Subject Code & Subject Title</p>
      <p class="align_text font">(Regulation 2019)</p>
      <p class="align_left font">Time: 3hrs&emsp;</p>
      <p class="align_right font">Max.Marks: 100</p>
      <p class="float font">Answer ALL Questions</p>
      <div style={{ clear: "both" }}></div>
      <table id="fetch" style={{ width: "70%" }} class="center table-bordered" rules="all">
        <tbody>
        <tr>
          <td>CO1</td>
          <td style={{ width: "95%" }}></td>
        </tr>
        <tr>
          <td>CO2</td>
          <td style={{ width: "70%" }}></td>
        </tr>
        <tr>
          <td>CO3</td>
          <td style={{ width: "70%" }}></td>
        </tr>
        <tr>
          <td>CO4</td>
          <td style={{ width: "70%" }}></td>
        </tr>
        <tr>
          <td>CO5</td>
          <td style={{ width: "70%" }}></td>
        </tr>
        </tbody>
      </table>
      <br></br>
      <u class="bold">Part-A (10 x 2 =20 Marks)</u>

      <table id="fetch" style={{ width: "80%" }} class="text_center table-bordered">
        <thead>
        <tr className="normal">
          <th>Sl.No.</th>
          <th style={{ width: "70%" }} text>
            Questions
          </th>
          <th>Marks</th>
          <th style={{ width: "7%" }}>CO</th>
          <th style={{ width: "7%" }}>BL</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>2</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>3</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>4</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>5</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>6</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>7</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>8</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>9</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        <tr>
          <td>10</td>
          <td class="center">Define Encapsulation</td>
          <td>2</td>
          <td>CO1</td>
          <td>BL1</td>
        </tr>
        </tbody>
      </table><br></br>
      <u class='bold'>Part-B (8 x 8 = 64)</u>
            <p class='bold padding'>(Answer any 8 Questions)</p>
            <table id="fetch" style={{width:"80%"}} class='text_center table-bordered'>
            <thead>
            <tr className='normal'>
                <th>Sl.No.</th>
                <th style={{width:"70%"}}  text>Questions</th>
                <th>Marks</th>
                <th style={{width:"7%"}}>CO</th>
                <th style={{width:"7%"}}>BL</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>11</td>
                <td class='center'>Declare a 2D array called Sales which can hold sales data
                of three stores for each of 12 months. Assume the sales
                data to be of type double. Print the following information:
                i. To find the store which made the
                least sales across a year
                ii. To find the month in which highest
                sales done for the third store.
                </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>12</td>
                <td class='center'>Define a class called Salesperson whose data members
                are: age(integer), name(String), number of sales(integer),
                salary(double). The member functions are: constructor
                with three arguments to initialise member variables age,
                name and salary and number of sales is initialised always
                initialised to zero, addSale(double saleAmount) – method
                to increment the number of sales for the amount of sale
                made, int getSales() – to return the sales made by the
                Salesperson, display() – to display the details of the
                Salesperson, double getBonus()
                </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>13</td>
                <td class='center'>Create an abstract class called Vehicle with members:
                vehicleNumber(integer), brand(String), model(String),
                vehicleCost(double),number of rentals(integer),
                constructors with arguments to initialise data members
                and number of rentals is initialised to zero, abstract
                methods void rent(). Define Car that extends from the
                class Vehicle with fields: mileage(double) and
                year(integer) and constructor with argument and override
                rent() to increment the number of rentals by one. Create
                interface Analysable that finds the Car which has been
                rented maximum number of times.
                Write a main program to create an array of Vehicles to
                store the objects of Car.
                </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>14</td>
                <td class='center'>Write a class called SupermarketItem that holds the
                information about an item in a supermarket. The class has
                the following members: description(String) – brief description of the item, stock(integer) – the number of
                units of item available, price(double), constructor with
                arguments and toString() – to display the
                SupermarketItem. Write a custom Exception that throws
                an exception whenever the stock and price are initialised
                with negative value inside constructor. </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>15</td>
                <td class='center'>Create a GUI application that calculates and displays the
                revenue made from ticket sales for a theatre. The
                information the user must provide is:
                i. Price per adult tickets
                ii. Number of adult tickets sold
                iii. Price per child ticket
                iv. Number of child tickets sold
                Assume that the theatre keeps 25 percent of the sales
                amount for maintenance. The application should
                calculate and display the following for per day
                business.
                i. Net revenue for adult tickets – amount of
                money from sales of adult ticket after deduction
                of maintenance cost.
                ii. Net revenue for child tickets – amount of
                money from sales of adult ticket after deduction
                of maintenance cost
                iii. Total net revenue – sum of net revenue for adult
                and child tickets sold</td>
                <td>8</td>
                <td>CO2,CO3</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>16</td>
                <td class='center'>Implement FileHandler class that contains write and read
                methods to read and write objects of SupermarketItem
                defined in question 14.Write a main program that will
                print the SupermarketItem whose stock is less than 10.</td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>17</td>
                <td class='center'>Write a Java program that counts the words in one or
                more files. Start a new thread for each file. For example,
                java WordCount sample.txt address.txt
                then the program should print
                sample.txt : 445
                address.txt: 1052</td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>18</td>
                <td class='center'>Develop a Java program to do the following:
                i. Create database Business
                ii. Create a table clientaddress in the database
                Business
                iii. Insert the record into the table Business
                iv. Display the records</td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>19</td>
                <td class='center'>Write a simple client/server application using socket
                programming. The client will send the amount and years
                of the Fixed deposit to a server.The server receives the
                data and produces the result. The result is sent to client
                and the client displays it in console. </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>20</td>
                <td class='center'> Create a class called PhoneBook that has fields
                name(String) and phone number(int). Define constructor
                amd toString() methods. Implement a driver program that
                creates alteast five PhoneBook objects and stores in an
                arraylist, the duplicate names(if any) in the arraylist should
                be deleted and PhoneBook objects must be displayed.</td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>21</td>
                <td class='center'>Develop a webpage to search for an employee by
                employee id using JSP.
                </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>22</td>
                <td class='center'>Describe the steps involved in implementing Remote
                Method Invocation in Java with an example.</td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <u class='bold'>Part-C (2 x 8 = 16)</u>
            <table id="fetch" style={{width:"80%"}} class='text_center table-bordered'>
            <thead>
            <tr className='normal'>
                <th>Sl.No.</th>
                <th style={{width:"70%"}}  text>Questions</th>
                <th>Marks</th>
                <th style={{width:"7%"}}>CO</th>
                <th style={{width:"7%"}}>BL</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>23</td>
                <td class='center'>Write an applet to receive a name and display a greeting
                message in different colour and font style.

                </td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            <tr>
                <td>24</td>
                <td class='center'>Create a class called Elevator with fields: number of
                persons(integer) and maximum allowed(integer). The
                default constructor initialises the number of persons to
                zero and maximum allowed to 20. Define methods void
                push(int) that increases the number of persons with the
                value passed as argument and void pop(int) that decreases
                the number of persons with the value passed as argument.
                Raise an exception whenever the maximum number of
                people exceeds 20 or number of people is less than 0.</td>
                <td>8</td>
                <td>CO1</td>
                <td>BL1</td>
            </tr>
            </tbody>
            </table>
    </>
  );
};

export default Preview;
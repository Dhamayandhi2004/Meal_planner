import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.css";

class DashboardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.weekDays = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];
    this.meals = ["breakfast", "lunch", "dinner"];
  }

  render() {
    return (
      <>
        <Paper className="root">
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell className="meal" />
                <TableCell className="meal" align="left">
                  Monday
                </TableCell>
                <TableCell className="meal" align="left">
                  Tuesday
                </TableCell>
                <TableCell className="meal" align="left">
                  Wednesday
                </TableCell>
                <TableCell className="meal" align="left">
                  Thursday
                </TableCell>
                <TableCell className="meal" align="left">
                  Friday
                </TableCell>
                <TableCell className="meal" align="left">
                  Saturday
                </TableCell>
                <TableCell className="meal" align="left">
                  Sunday
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.meals.map((meal, i) => (
                <TableRow key={i}>
                  <TableCell
                    className="meal"
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {meal}
                  </TableCell>
                  {this.weekDays.map(day => (
                    <TableCell
                      align="left"
                      onClick={() =>
                        this.props.clickedMeal(this.props[day][meal])
                      }
                      id={
                        this.props[day] && this.props[day][meal]
                          ? this.props[day][meal].uri
                          : ""
                      }
                    >
                      {this.props[day] && this.props[day][meal] ? (
                        <div className="img-container">
                          <img
                            className="image-recepe"
                            alt="recepe"
                            src={this.props[day][meal].image}
                          />
                          <p className="lableImg">
                            {this.props[day][meal].label}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

export default DashboardTable;

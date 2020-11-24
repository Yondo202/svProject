import React, { Component } from 'react'
import jsPDF from 'jspdf'
import axios from 'axios'
import "jspdf-autotable";
import { withRouter } from 'next/router'

export class test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: null,
        }
        // console.log(this.props.all, 'my ALL');
    }

    async componentDidMount() {
        const Data = await axios.get(`https://svv-admin.herokuapp.com/forms?id=${this.props.router.query.id}`);
        const FinalData = Data.data;
        this.setState({
            users: FinalData,
        });
    }

    render() {
        // console.log(this.state.myData, ' this is my id');
        const { users } = this.state;
        if (users && !users[0]) {
            return (
                <div className="App">
                    <h1>Loading</h1>
                </div>
            );
        }
        // console.log(users, "this my users")

        const jsPdfGenerate = () => {
            const doc = new jsPDF("p", "pt", "letter");
            doc.addFileToVFS("NotoSansCJKjp-Regular.ttf", "NotoSansCJKjp"); // default values
            doc.addFont('NotoSansCJKjp-Regular.ttf', 'NotoSansCJKjp',  "normal");
            doc.setFont("'NotoSansCJKjp'","bold"); // set font
            // doc.setLanguage("ro-MO");
            doc.setFontSize(30);

            doc.text(`SV pdf Test`, 105 * 2.83, 20 * 2.83, null, null, "center"  );

            const usersCol = [`Email`, "parent", "name"];
            const usersRows = users.map(u => {
                const row = [u.email,u.name, u.parent];
                return row;
            })
            const startY = 30 * 2.83;
            doc.autoTable(usersCol, usersRows, { startY: 20 * 2.83,  startY, theme: "grid", styles: {fontSize: 11  }});


            const usersCol2 = [`birthday`, "number", "region"];
            const usersRows2 = users.map(u => {
                const row = [`${u.year}-${u.month}` ,u.phone, u.facebook];
                return row;
            })
            const startY2 = 30 * 2.83;
            doc.autoTable(usersCol2, usersRows2, { startY: 46 * 2.83,  startY2, theme: "grid", styles: {fontSize: 11  }});


            const usersCol3 = [`English`, "Microsoft Excel", "Microsoft Word", "Track Speed"];
            const usersRows3 = users.map(u => {
                const row = [`${u.English}%`,`${u.wordexcel}%`,`${u.wordoffice}%`,`${u.textspeed}%`];
                return row;
            })
            const startY3 = 30 * 2.83;
            doc.autoTable(usersCol3, usersRows3, { startY: 66 * 2.83,  startY3, theme: "grid", styles: {fontSize: 11  }});


            doc.save(`SVexport.pdf`);
        }

        return (
                <button style={{ display: `${this.props.Submit}` }} type="button" onClick={jsPdfGenerate}>Хэвлэх (pdf)</button>
        )
    }
}

export default withRouter(test)
















            // doc.addImage(
            //     "https://source.unsplash.com/random/600x400",
            //     "JPEG",
            //     15 * 2.83,
            //     40 * 2.83,
            //     180 * 2.83,
            //     120 * 2.83
            // );
            // doc.setFontSize(11);
            // doc.text(
            //     "This is a random image",
            //     105 * 2.83,
            //     165 * 2.83,
            //     null,
            //     null,
            //     "center"
            // );

            // set back fontStyle to normal
            //   doc.setFontStyle("normal");

            // Table
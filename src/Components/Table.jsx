import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ToggleButtonGroup from "./Cashflownav2";
import "./table.css"

const formatNumber = (num) => Math.floor(num);

const TableComp = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const itemsPerPage = 6;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let fdata = await axios.get("https://kaptive-assignment-hcw9.onrender.com/Sheet1");
        setData(fdata.data);
        console.log(fdata.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <>
    <div className="d-flex justify-content-between mb-3">
    <h3>Cashflow Summary - 1</h3>
    <ToggleButtonGroup/>
    </div>
   
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-primary">
            <tr>
              <th style={{ width: "300px", padding: "0.5rem" }}>Cashflow</th>
              <th style={{ padding: "0.5rem" }}>January</th>
              <th style={{ padding: "0.5rem" }}>February</th>
              <th style={{ padding: "0.5rem" }}>March</th>
              <th style={{ padding: "0.5rem" }}>April</th>
              <th style={{ padding: "0.5rem" }}>May</th>
              <th style={{ padding: "0.5rem" }}>June</th>
              <th style={{ padding: "0.5rem" }}>July</th>
              <th style={{ padding: "0.5rem" }}>August</th>
              <th style={{ padding: "0.5rem" }}>September</th>
              <th style={{ padding: "0.5rem" }}>October</th>
              <th style={{ padding: "0.5rem" }}>November</th>
              <th style={{ padding: "0.5rem" }}>December</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((d) => {
              const {
                Overhead,
                Jan,
                Feb,
                March,
                April,
                May,
                June,
                July,
                August,
                September,
                October,
                November,
                December,
              } = d;
              return (
                <tr key={Overhead}>
                  <td style={{ width: "300px", padding: "0.5rem" }}>{Overhead}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(Jan)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(Feb)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(March)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(April)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(May)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(June)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(July)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(August)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(September)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(October)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(November)}</td>
                  <td style={{ padding: "0.5rem" }}>{formatNumber(December)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
       
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        disabledClassName={"disabled"}
       />
    </>
  );
};

export default TableComp;

import {Container} from "react-bootstrap";
import TopNavBarComponent from "../../components/top-nav-bar/top-nav-bar-component";
import GridComponent from "../../components/items-grid/items-grid-component";
import TableListComponent from "../../components/table-list/table-list-component";
import {useSelector} from "react-redux";
import {FC} from "react";
import React from "react";
import {RootState} from "../../redux/reducers";

//Index page
const Index: FC = () => {

    const grid = useSelector((state: RootState) => state.employees?.gridView);

    return (
        <div>
            <TopNavBarComponent/>
            <Container className="mb-5">
                {grid ? <GridComponent/> : <TableListComponent/>}
            </Container>
        </div>
    );
};

export default Index;
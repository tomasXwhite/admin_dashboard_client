import "../../App.scss"
import { Container, Row, Col } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { getDataAction } from "../../redux/actions/data"
import { useEffect } from "react"
import { cleanData } from "../../redux/reducers/dataSlice"


export default function Home() {


    const dispatch = useDispatch<any>()
    const { stats } = useSelector((state: any) => state.data)

    useEffect(() => {
        console.log("USEFFECT", stats)
    }, [stats])


    const bringData = () => {
        dispatch(getDataAction())
    }
    const cleanFunc = () => {
        dispatch(cleanData())
    }
    return (
        <div className="">
            <Container>
                <Row>
                    <Col xs="4">
                        <button onClick={() => bringData()}>Press to bring data</button>
                    </Col>
                    <Col xs="4">
                        <button onClick={() => cleanFunc()}>Press to clean data</button>
                    </Col>


                </Row>
            </Container>
            <h1 >
                Welcome to home, admin.
            </h1>

            <h3>
                Your stats
            </h3>
            {
                stats?.length > 0 ?
                    stats.map((c: any) => {
                        return (
                            <p>
                                {
                                    c.id
                                }
                            </p>
                        )
                    })


                    : <p>Stats are empty</p>
            }


        </div>
    )
}
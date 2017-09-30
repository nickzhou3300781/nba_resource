import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

class main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                            <div className="team-image">
                                <img alt="team" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            </div>
                            <div className="team-card">
                                <h3>Golden State Warriors</h3>
                            </div>
                        </Card>
                    </Col>
                </Row>               
            </div>
        )
    }
}

export default main
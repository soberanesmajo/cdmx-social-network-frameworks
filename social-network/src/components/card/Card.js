import React, {
  Component
} from 'react';
import {
  Row,
  Col,
  CardPanel
} from 'react-materialize';


class Cardprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {

    console.log(this.props);
    this.props.db.collection('posts').onSnapshot((querySnapshot) => {
        console.log(querySnapshot);
        const posts = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          posts.push(doc.data());
        });
        this.setState({
          posts: posts
        });
    });


    }

    render() {
        return (
          <div>
          {this.state.posts.reverse().map(post => 
            <div className = 'container'>
              <Row>
                <Col s={12} m={5}>
                  <CardPanel className="teal lighten-4 black-text">
                  <span>{post.post}</span>
                    </CardPanel>
                </Col>
              </Row>
            </div>
            )}
            </div>
        )
  }
}

  export default Cardprint;
import React, { Component } from 'react'
import JobItem from './JobItem'
export class Jobs extends Component {
  results=[
    {
      "jobtitle": "Java Developer",
      "company": "Tradelogic Corporation",
      "city": "Austin",
      "state": "TX",
      "country": "US",
      "formattedLocation": "Austin, TX",
      "source": "Tradelogic Corporation",
      "date": "Mon, 22 Jul 2013 01:16:44 GMT",
      "snippet": "a <b>Java</b> Developer to join our team. This position will be responsible for design and development of <b>Java</b>... <b>Java</b> or C# Frameworks/Skills: <b>Java</b> EE, <b>Java</b> Swing or... ",
      "url": "http://www.indeed.com/viewjob?jk=83400e947276d20b&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9",
      "onmousedown": "indeed_clk(this, '2673');",
      "jobkey": "83400e947276d20b",
      "sponsored": false,
      "expired": false,
      "formattedLocationFull": "Austin, TX",
      "formattedRelativeTime": "1 day ago"
    },
    {
      "jobtitle": "Sr. Java Developer",
      "company": "CoreLogic",
      "city": "Austin",
      "state": "TX",
      "country": "US",
      "formattedLocation": "Austin, TX",
      "source": "CoreLogic",
      "date": "Fri, 19 Jul 2013 17:22:19 GMT",
      "snippet": "Knowledge/Skills Strong <b>Java</b> development skills... abreast of emerging technology trends Core <b>Java</b> and <b>Java</b> Enterprise Edition (JavaEE) Strong relational... ",
      "url": "http://www.indeed.com/viewjob?jk=9d2c6535dc61d3b6&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9",
      "onmousedown": "indeed_clk(this, '2673');",
      "jobkey": "9d2c6535dc61d3b6",
      "sponsored": false,
      "expired": false,
      "formattedLocationFull": "Austin, TX",
      "formattedRelativeTime": "4 days ago"
    },
    {
      "jobtitle": "Software Developer III - US Job",
      "company": "Rackspace",
      "city": "Austin",
      "state": "TX",
      "country": "US",
      "formattedLocation": "Austin, TX",
      "source": "Rackspace",
      "date": "Fri, 19 Jul 2013 04:40:11 GMT",
      "snippet": "JavaScript and some of the following languages: Scala Lisp Erlang Haskell Clojure <b>Java</b> Ruby C# Smalltalk Python , Can energetically discuss technical opinions... ",
      "url": "http://www.indeed.com/viewjob?jk=066f952bb6793d2b&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9",
      "onmousedown": "indeed_clk(this, '2673');",
      "jobkey": "066f952bb6793d2b",
      "sponsored": false,
      "expired": false,
      "formattedLocationFull": "Austin, TX 78753",
      "formattedRelativeTime": "4 days ago"
    },
    {
      "jobtitle": "Senior Java Developer",
      "company": "Bancvue",
      "city": "Austin",
      "state": "TX",
      "country": "US",
      "formattedLocation": "Austin, TX",
      "source": "BancVue",
      "date": "Sat, 20 Jul 2013 09:42:44 GMT",
      "snippet": "The Senior <b>Java</b> Developer is responsible for the... field. 7-10 years of experience in <b>Java</b> EE development, including at least one <b>Java</b> framework (e.g. Spring... ",
      "url": "http://www.indeed.com/viewjob?jk=8276cdc5acba8b49&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9",
      "onmousedown": "indeed_clk(this, '2673');",
      "jobkey": "8276cdc5acba8b49",
      "sponsored": false,
      "expired": false,
      "formattedLocationFull": "Austin, TX",
      "formattedRelativeTime": "3 days ago"
    },
    {
      "jobtitle": "Web Development Software Engineer",
      "company": "HomeAway",
      "city": "Austin",
      "state": "TX",
      "country": "US",
      "formattedLocation": "Austin, TX",
      "source": "HomeAway",
      "date": "Fri, 19 Jul 2013 17:08:15 GMT",
      "snippet": "application and supporting <b>Java</b> services with a focus... of high traffic <b>Java</b> web applications. * 1-3 years programming experience in <b>Java</b>. * 1-2 years experience... ",
      "url": "http://www.indeed.com/viewjob?jk=223bb8ebe75df8d0&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9",
      "onmousedown": "indeed_clk(this, '2673');",
      "jobkey": "223bb8ebe75df8d0",
      "sponsored": false,
      "expired": false,
      "formattedLocationFull": "Austin, TX",
      "formattedRelativeTime": "4 days ago"
    }]
  constructor(){
    super();
    console.log('This is a constructor')
    this.state={
      results: [],
      loading: false
    }
  }
  async componentDidMount(){
    const url = 'https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs?keywords=golang&locationId=92000000&datePosted=anyTime&sort=mostRelevant';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7de91879ffmsh8680417bce7a283p1599b8jsn2083c0230a0c',
        'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      this.setState({results: result.data})
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <center><h1>Job</h1></center>
        <div className='row'>
          {this.state.results.map((element)=>{
              return <div className='col-md-4 my-4' key={element.jobkey}>
                <JobItem title={element.title} desc={element.location} url={element.url} imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QBMhMBsqb-QfOJGraYsL9V8KsGc8ijrIvA1eugCpEQ&s'/>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default Jobs

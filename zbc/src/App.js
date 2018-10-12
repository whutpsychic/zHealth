import React, { Component } from 'react';
import './App.css';

//传统整个引入
//import echarts from 'echarts';

//尝试按需加载
import echarts from './modules/echarts.ness.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
		<main>
			<div ref="chart" className="chart-container"></div>
		</main>	
      </div>
    );
  }


componentDidMount(){

const chart = echarts.init(this.refs.chart);

const option = {
	  xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}


chart.setOption(option);


}







}

export default App;


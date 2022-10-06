import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  houseViewingImg:string = '';

  ngOnInit(): void {
    this.filter[0]['isActive']=true
    this.houseSelect(this.house_list[0],this.house_list)
    this.houseViewingImg = this.house_list[0].house_img
    
    var chartDom = document.getElementById('main')as HTMLCanvasElement;
    var myChart = echarts.init(chartDom);
    var option;
    
    const colors = ['#5470C6', 'lightgray'];
    option = {
      color: colors,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {},
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params:any) {
                return (
                  'Precipitation  ' +
                  params.value +
                  (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              }
            }
          },
          // prettier-ignore
          data: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0]
            }
          },
        //   axisPointer: {
        //     label: {
        //       formatter: function (params:any) {
        //         return (
        //           'Precipitation  ' +
        //           params.value +
        //           (params.seriesData.length ? '：' + params.seriesData[0].data : '')
        //         );
        //       }
        //     }
        //   },
          // prettier-ignore
          // data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '2021',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: '2022',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [
            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
  }
 


  filter:any[] = [
    {'fil_name' : 'weeks',},
    {'fil_name' : 'months',},
    {'fil_name' : 'year',}
  ];
  
  house_list:any[] = [
    {'house_name':'Windmills loft',
      'house_img':'./assets/images/blueHome.jpg',
      'percent':'25%'
    },
    {'house_name':'Seaview villa',
      'house_img':'./assets/images/pink-build.jpg',
      'percent':'15%'
    },
    {'house_name':'Family villa',
      'house_img':'./assets/images/gray-build.jpg',
      'percent':'20%'
    }
  ]

  filterSelect(opt:any,filter:any[]){
      filter.map(item=>{
        item.isActive = false
        if(item.fil_name == opt.fil_name){
          item.isActive = true
          console.log(item)
        }
      }) 
  }

  houseSelect(house:any,list:any[]){
    list.map(item=>{
      item.isActive = false
      if(house.house_name == item.house_name){
        item.isActive = true
        this.houseViewingImg = item.house_img
      }
    })
  }

}

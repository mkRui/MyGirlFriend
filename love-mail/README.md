# 每日一封暖心邮件

## 目前功能

> 未开发  

  定时任务每日发送  
  实时爬取bing图片  
  采用天行API获取每日情话  
  计算相爱日期

> 未开发  

  所在城市天气  
  每日星座运势

## 使用方法
  在文件根目录添加`email.config.ts`
  ### 添加如下配置
  ```typescript
    {
        form: '发件@qq.com', // 发件人
        to: '收件@qq.com', // 收件人
        title: 'title', // 标题
        subTitle: 'Subtitle', // 副标题
        key: 'password', // 邮箱密钥

        // 相爱的日期
        date: 'date',
    }
  ```
  
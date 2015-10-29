# Lisa
> This is a chrome extension, She is Lisa.

## Usage

#### 下载

` git clone git@github.com:imochen/Lisa.git `

#### 添加到chrome

打开chrome，进入 `chrome://extensions/`,

勾选`开发者模式`

选择`加载已解压的扩展程序`

选中刚刚下载的`Lisa`目录，添加到Chrome


#### 配置你的的脚本

在`task`目录下新建运行脚本，和你平时写JS操作DOM是一样一样的，`jQuery`库我已经帮你加载了。你可以直接使用。

新建完脚本后，打开根目录的`index.js`

将`config.task`的值修改为你自己的脚本名字，可省略`.js`


如：在task目录已经有一个`jikeVIP.js`。
在根目录的`index.js`里面设置`config.task = 'jikeVIP'`

#### 运行你的脚本

回到`chrome`的`chrome://extensions/`中。点击`重新加载`。你的脚本即可运行。



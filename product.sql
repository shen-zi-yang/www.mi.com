-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 21:38:26
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `h5_2021`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `title` text NOT NULL COMMENT '商品标题',
  `storage` text NOT NULL COMMENT '手机内存',
  `color` text NOT NULL COMMENT '商品颜色',
  `suit` text NOT NULL COMMENT '商品套装',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(11) NOT NULL COMMENT '商品数量',
  `picture` text NOT NULL COMMENT '商品图片',
  `detail` text NOT NULL COMMENT '商品详情',
  `details` text NOT NULL COMMENT '商品详细'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `storage`, `color`, `suit`, `price`, `num`, `picture`, `detail`, `details`) VALUES
(2, '小米11 Ultra', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '[\"陶瓷黑\",\"陶瓷白\"]', '[\"标准版\",\"套装版（赠充电器）\",\"Air2 SE耳机套装（全款支付专享）\"]', 5999, 100, '[{\"src\":\"imgs/p01-01.jpg\",\"alt\":\"small\"}]', '1.12\"GN2 | 2K四微曲屏', '1.12\'\'GN2｜128°超广角｜120X超长焦｜2K四微曲屏｜骁龙888｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器'),
(1, 'MIX FOLD 折叠屏手机', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '黑色', '', 9999, 100, '[{\"src\":\"imgs/p02-01.jpg\",\"alt\":\"small\"}]', '折叠大屏 | 自研芯片', '8.01\'\'折叠大屏｜澎湃C1自研专业影像芯片｜液态镜头｜1亿像素｜骁龙888｜67W快充｜5020mAh超大电池｜LPDDR5满血版｜WiFi6（增强版）｜哈曼卡顿立体声四扬声器'),
(3, '小米11 Pro', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '[\"黑色\",\"白色\",\"陶瓷定制版\"]', '[\"标准版\",\"套装版（赠充电器）\",\"Air2 SE耳机套装（全款支付专享）\"]', 5299, 100, '[{\"src\":\"imgs/p03-01.jpg\",\"alt\":\"small\"}]', '1.12\"GN2｜骁龙888', '1.12\'\'GN2｜骁龙888｜2K四微曲屏｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器'),
(4, '小米11 青春版', '[\"8GB+256GB\",\"8GB+128GB\"]', '[\"清凉薄荷\",\"清甜荔枝\",\"冰峰黑提\"]', '[\"标准版\",\"套装版（赠充电器）\"]', 2299, 100, '[{\"src\":\"imgs/p04-01.jpg\",\"alt\":\"small\"}]', '小米11 青春版 轻薄', '轻薄、多彩 / 骁龙780G / 专业电影相机，前置超级夜景 / AMOLED 柔性直屏 / 超线性立体声双扬声器'),
(5, 'Redmi K40 游戏增强版', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '[\"光刃\",\"暗影\",\"银翼\"]', '', 2699, 100, '[{\"src\":\"imgs/p05-01.jpg\",\"alt\":\"small\"}]', '轻薄电竞设计', '天玑1200年度旗舰处理器｜弹出式肩键｜航天立体散热｜JBL立体声双扬声器｜64MP旗舰三摄'),
(6, '黑鲨4', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '[\"黑色\",\"白色\",\"陶瓷定制版\"]', '', 2699, 100, '[{\"src\":\"imgs/p06-01.jpg\",\"alt\":\"small\"}]', '黑鲨4 磁动力升降肩键', '骁龙870 | 120W极速闪充+4500mAh双电竞电池 | 磁动力升降肩键 | 720Hz触控采样率+144Hz 三星E4屏幕 | 高品质双扬声器'),
(7, '黑鲨4 Pro', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '墨海黑', '', 3999, 100, '[{\"src\":\"imgs/p07-01.jpg\",\"alt\":\"small\"}]', '黑鲨4 Pro', '骁龙888 | 增强版UFS3.1+SSD磁盘阵列系统 | 高品质双扬声器，DXOMARK音频总分第一名 | 120W极速闪充+4500mAh双电竞电池 | 磁动力升降肩键 | 144Hz 三星E4屏幕'),
(8, '小米10S', '[\"8GB+256GB\",\"8GB+128GB\",\"12GB+256GB\"]', '[\"黑色\",\"白色\",\"蓝色\"]', '[\"标准版\",\"套装版（赠充电器）\"]', 3299, 100, '[{\"src\":\"imgs/p08-01.jpg\",\"alt\":\"small\"}]', '骁龙870 | 对称式双扬立体声', '骁龙870 | 对称式双扬立体声 | 1亿像素 8K电影相机 | 33W有线快充 | 30W无线快充 | 10W反向充电 | 4780mAh超大电池 | LPDDR5+UFS3.0+Wi-Fi 6 | VC液冷散热 | 双模5G');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

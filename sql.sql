CREATE TABLE `tb_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(30) NOT NULL COMMENT '账号',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `nickname` varchar(30) DEFAULT NULL COMMENT '昵称',
  `email` varchar(50) NOT NULL COMMENT '邮箱',
  `gender` tinyint(1) unsigned DEFAULT '1' COMMENT '性别',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `signature` varchar(500) DEFAULT NULL COMMENT '个性签名',
  `region` varchar(100) DEFAULT NULL COMMENT '地区',
  `mobile` varchar(15) DEFAULT NULL COMMENT '手机号码',
  `memo` varchar(500) DEFAULT NULL COMMENT '备注',
  `status` tinyint(2) unsigned DEFAULT '1' COMMENT '状态',
  `login_ip` int(11) unsigned NOT NULL COMMENT '上一次的登录IP',
  `login_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '上一次的登录时间',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `tb_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role` varchar(30) NOT NULL COMMENT '角色',
  `description` varchar(500) DEFAULT NULL COMMENT '描述',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `tb_role_func` (
  `role_id` int(10) unsigned NOT NULL COMMENT '角色ID',
  `func_id` int(10) unsigned NOT NULL COMMENT '功能ID',
  `access` tinyint(4) unsigned DEFAULT NULL COMMENT '拥有的权限',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`role_id`,`func_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `tb_user_role` (
  `user_id` int(10) unsigned NOT NULL COMMENT '用户ID',
  `role_id` int(10) unsigned NOT NULL COMMENT '角色ID',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `tb_function` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '功能ID',
  `function` varchar(30) NOT NULL COMMENT '功能名称',
  `description` varchar(500) DEFAULT NULL COMMENT '描述',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

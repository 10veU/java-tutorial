---
title: Java基础知识（一） 基础概念篇
tags:
  - Java
  - 基础知识
  - 面试
---
## 1. Java技术的特点
Java技术既是一种**编程语言**，也是一种**平台**。
- Java编程语言

  Java 编程语言是一种高级语言，它拥有属性以下所有特点:
  - 简单
  - 面向对象
  - 分布式
  - 多线程
  - 动态
  - 架构中立
  - 可移植
  - 高性能
  - 健壮性
  - 安全性  
    
  > James Gosling和Henry McGilton撰写的白皮书[《Java语言环境》](https://www.oracle.com/java/technologies/language-environment.html)中进行了解释。 

  在 Java 编程语言中，所有源代码首先以以.Java 扩展名结尾的纯文本文件编写。然后将这些源文件通过 `javac` 编译器编译为 `.class` 文件。一个 `.class` 文件不包含处理器本机的代码，而是包含字节码（Java Virtual Machine1(Java VM)的机器语言）。然后，Java 启动程序工具使用 Java 虚拟机的实例运行应用程序。

  ![An overview of the software development process.](./img/getStarted-compiler.gif)

  因为 `JavaVM` 在许多不同的操作系统上都是可用的。`.class` 文件能够在 `Microsoft Windows`、 `SolarisTM` 操作系统( `Solaris OS` )、 `Linux` 或 `Mac OS` 上运行。一些虚拟机（ 例如 `JavaSEHotSpot` ) 在运行时执行额外的步骤，以提高应用程序的性能。这包括各种各样的任务，例如查找性能瓶颈和重新编译(到本机代码)经常使用的代码段。  

  ![Through the Java VM, the same application is capable of running on multiple platforms.](./img/helloWorld.gif)  

- Java平台

  **平台是运行程序的硬件或软件环境**。我们都知道一些最流行的平台（ 比如 `Microsoft Windows`、 `Linux`、 `Solaris OS` 和 `Mac OS` ）。大多数平台可以描述为操作系统和底层硬件的组合。`Java` 平台与大多数其他平台的不同之处在于，它是一个仅在软件上运行的平台，运行在其他基于硬件的平台之上。  

  ![The API and Java Virtual Machine insulate the program from the underlying hardware.](./img/getStarted-jvm.gif)  

  `Java` 平台有两个组件: 
  - Java 虚拟机   
    `JVM`它是 Java 平台的基础，并且被移植到各种基于硬件的平台上。
  - Java 应用程序编程接口(API)  
    API 是提供许多有用功能的现成软件组件的大型集合。它被分组到相关类和接口的库中; 这些库称为包。

> [About the Java Technology](https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html)    
## 2. Oracle JDK和Open JDK的区别和联系
### Oracle JDK 和 Java SE 历史
JDK ( `Java Development Kit` )是一种用于 `Java` 平台编程的软件开发环境。它包含一个完整的 `JRE`，即所谓的`Java`运行时环境。之所以称为 `JDK`是因为它包含比独立 JRE 更多的工具，以及开发 Java 应用程序所需的其他组件。  
`Oracle` 强烈建议使用术语 `JDK` 来指代 `JavaSE` (标准版)开发工具包(还有企业版和微版平台)。  
Java SE 历史:
- JDK Beta-1995 
- JDK 1.0-1996年1月 
- JDK 1.1-1997年2月 
- J2SE 1.2-1998年12月 
- J2SE 1.3-2000年5月 
- J2SE 1.4-2002年2月 
- J2SE 5.0-2004年9月 
- Java SE 6-2006年12月 
- Java SE 7-2011年7月
- Java SE 8(LTS)-2014年3月 
- Java SE 9-2017年9月 
- Java SE 10(18.3)-2018年3月 
- Java SE 11(18.9 LTS)-2018年9月 
- Java SE 12(19.3)-2019年3月 

在 `JavaSE7`之前，JavaSE 的主要版本大约每两年发布一次。从 `JavaSE6` 转移到 `JavaSE8`花了五年时间，之后又花了三年时间。  
从 JavaSE10开始，我们预计每六个月就会有新的版本发布。然而，并非所有的发行版都是长期支持(`Long-Term-Support，LTS`)发行版。根据 `Oracle` 的发布计划，`LTS` 产品的发布将每三年进行一次。  
`JavaSE11` 是最新的 `LTS` 版本，`JavaSE8`将在2020年12月之前免费公开更新，以供非商业使用。 
`Oracle JDK`在 `Oracle` 2010年收购 `Sun Microsystems` 之后就有了现在的名字。在此之前，它的名字是 `SUN JDK`，是 `Java` 编程语言的官方实现。 

### OpenJDK
`OpenJDK` 是 `JavaSE` 平台版的免费开源实现。它最初是在 `2007` 年发布的，是`Sun Microsystems`从`2006` 年开始研发开源的结果。  
`OpenJDK` 是自 `Java SE 7` 版本以来 `Java` 标准版的官方参考实现。  
最初，它只基于 `JDK7`，但是从 `Java10`开始，`Java SE` 平台的开源参考实现就是 [JDK Project](https://openjdk.org/projects/jdk/) 的责任。与 `Oracle` 一样，JDK 项目也将每六个月发布一次新特性。  
`OpenJDK`的版本：
- OpenJDK 6 project-基于 JDK 7，但是经过修改提供了一个开源版本的 Java 6 
- OpenJDK 7 project-2011年7月28日 
- OpenJDK 7u project-这个项目开发了对 JDK 7的更新
- OpenJDK 8 project-2014年3月18日
- OpenJDK 8u project-这个项目对 JDK 8进行了升级
- OpenJDK 9 project-2017年9月21日 
- JDK project release 10-2018年3月20日
- JDK project release 11-2018年9月25日 
- JDK project release 12-稳定阶段
### Oracle JDK vs. OpenJDK
Oracle JDK和OpenJDK的区别
- 发布计划  
Oracle将每三年发布一次，而OpenJDK将每六个月发布一次。
Oracle 为其版本提供长期支持。另一方面，OpenJDK只支持对发行版的更改，直到下一个版本发布。
- Licenses  
Oracle JDK 使用 BCL/OTN 协议获得许可，而 OpenJDK 根据 GPL v2 许可获得许可。
- 性能  
这两者之间没有真正的技术区别，因为 Oracle JDK 的构建过程是基于 OpenJDK 的。在性能方面，Oracle 在响应性和 JVM 性能方面要好得多。
- 功能  
如果我们比较特性和选项，我们将看到 Oracle 产品具有 Flight Recorder、 Java Mission Control 和 Application Class-Data Share 特性，而 OpenJDK 具有 Font Renderer 特性。此外，Oracle 还有更多的垃圾收集选项和更好的渲染器。

> [Differences Between Oracle JDK and OpenJDK](https://www.baeldung.com/oracle-jdk-vs-openjdk) 

## 3. 面向对象 vs. 面向过程
```java
面向对象： 🐕.eat(💩)

面向过程： eat.(🐕,💩)
```
> https://www.zhihu.com/question/19701980/answer/12701069

## 4. 对象和类
### 类（`Class`）
**类**是创建对象的原型。类是对真实世界对象的状态和行为进行抽象建模，表示的是一个抽象的、共性的产物。  
### 对象（`Object`）
**对象**是类相关**状态**和**行为**的个性化表示。软件对象通常用于对您在日常生活中发现的真实世界对象进行建模。  
现实世界的对象有两个共同的特征：它们都具有**状态**和**行为**。狗有状态（名字，颜色，品种，饥饿）和行为（吠叫，抓取，摇尾巴）。  
软件对象在概念上类似于现实世界的对象：它们也由状态和相关行为组成。对象将其**状态**存储在**字段**（某些编程语言中的变量）中，并通过**方法**（某些编程语言中的函数）公开其**行为**。方法对对象的内部状态进行操作，并充当对象到对象通信的主要机制。 

类和对象的区别：类是对象的模板，对象是类的实例。类只有通过对象才可以使用，而在开发之中应该先产生类，之后再产生对象。类不能直接使用，对象是可以直接使用的。

> [类和对象定义？类与对象关系是什么？](https://zhuanlan.zhihu.com/p/295432676)  
[Object-Oriented Programming Concepts](https://docs.oracle.com/javase/tutorial/java/concepts/index.html)

## 5. 面向对象编程（ `Object-Oriented Programming`, `OOP`）语言三大特点  
### 封装(`Encapsulation`)
隐藏对象内部状态并要求所有交互都通过对象的方法执行，这就是所谓的数据**封装**。  
封装的作用：
- 模块化
- 信息隐藏
- 代码重用
- 可插入性和调试简便性
### 继承(`Inheritance`)
在Java编程语言中，允许每个类有一个直接超类，并且每个超类都有无限数量的子类。使用`extends`关键字。
```java
public Sub extends Super {
  ...
}
```
继承的作用
- 代码重用
- 为多态提供了条件
### 多态(`Polymorphism`)
多态是指在父类中定义的属性和方法被子类继承之后，可以具有不同的数据类型或表现出不同的行为，这使得同一个属性或方法在父类及其各个子类中具有不同的含义。
简单说就是，父类的引用指向子类对象。
- 多态的体现
  - 方法的重载（ `overload`）与重写( `override` )
  - 对象的多态性-可以直接应用在抽象类和接口上  

多态的作用：
- 扩展性

> [OOP编程思想：封装、继承、多态](https://zhuanlan.zhihu.com/p/88176396)

## 6. 包（`package`）
包是组织一组相关类和接口的命名空间。从概念上讲，可以认为软件包与计算机上的不同文件夹相似。。因为用 Java 编程语言编写的软件可以由成百上千个独立的类组成，所以通过将相关的类和接口放入包中来保持组织有序是有很有必要的。

> [What Is a Package?](https://docs.oracle.com/javase/tutorial/java/concepts/package.html)


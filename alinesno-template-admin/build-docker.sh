# !/bin/sh

# 镜像参数
docker_repostory=registry-vpc.cn-shenzhen.aliyuncs.com
docker_registry_name=alinesno-cloud
project_artifactid=alinesno-cloud-base-cloud-ui
project_version=2.1.2-Alpha

# 构建镜像
docker build -t ${docker_repostory}/${docker_registry_name}/${project_artifactid}:${project_version} .

# 发布镜像
docker push ${docker_repostory}/${docker_registry_name}/${project_artifactid}:${project_version}

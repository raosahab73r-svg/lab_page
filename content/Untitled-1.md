/kcdh/tanmoy.roychowdhury/1000_genome/20201028_3202_phased/logs
(base) [govind.mangropa@master logs]$ cd /kcdh/tanmoy.roychowdhury/tools/verifyIDintensity
(base) [govind.mangropa@master verifyIDintensity]$ conda activate /kcdh/tanmoy.roychowdhury/tools/verifyIDintensity_env
(/kcdh/tanmoy.roychowdhury/tools/verifyIDintensity_env) [govind.mangropa@master verifyIDintensity]$ ./verifyIDintensity --help

USAGE: 

   ./verifyIDintensity  [-t <float>] -m <int> -n <int> [-b <string>] [-s
                        <string>] -i <string> [-v] [-p] [--] [--version]
                        [-h]


Where: 

   -t <float>,  --threshold <float>
     Minimum allele frequency for likelihood estimation, default is 0.01

   -m <int>,  --marker <int>
     (required)  Number of markers

   -n <int>,  --number <int>
     (required)  Number of samples


(/kcdh/tanmoy.roychowdhury/tools/verifyIDintensity_env) [joydeep.das_phd25@master verifyIDintensity]$ ./verifyIDintensity --help 
./verifyIDintensity: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.20' not found (required by ./verifyIDintensity)
./verifyIDintensity: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by ./verifyIDintensity)
./verifyIDintensity: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by ./verifyIDintensity)
./verifyIDintensity: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.21' not found (required by ./verifyIDintensity) i
same hpc same directry but logn differnt 
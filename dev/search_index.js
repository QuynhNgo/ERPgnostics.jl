var documenterSearchIndex = {"docs":
[{"location":"generated/intro/test/","page":"-","title":"-","text":"EditURL = \"../../../literate/intro/test.jl\"","category":"page"},{"location":"generated/intro/test/","page":"-","title":"-","text":"","category":"page"},{"location":"generated/intro/test/","page":"-","title":"-","text":"This page was generated using Literate.jl.","category":"page"},{"location":"api/","page":"API / DocStrings","title":"API / DocStrings","text":"Modules = [ERPgnostics]\nOrder   = [:function]","category":"page"},{"location":"api/#ERPgnostics.inter_heatmap-Tuple{DataFrame}","page":"API / DocStrings","title":"ERPgnostics.inter_heatmap","text":"inter_heatmap(pattern_detection_values::DataFrame)\n\nPlot interactive heatmap with channels on x-axis and index of event variable on y-axis.\n\nArguments\n\npattern_detection_values::DataFrame\n  DataFrame with columns condition and estimate. Each condition is a value on y-axis. \nkwargs...\n  Additional styling behavior. \n\n\nReturn Value: Interactive Figure displaying heatmap.\n\n\n\n\n\n","category":"method"},{"location":"api/#ERPgnostics.inter_heatmap_image-Tuple{DataFrame, DataFrame, Array{Float64, 3}}","page":"API / DocStrings","title":"ERPgnostics.inter_heatmap_image","text":"inter_heatmap_image(pattern_detection_values::DataFrame, events::DataFrame, erps::Array{Float64, 3})\n\nPlot heatmap and interactive ERP image.\nHeatmap will have channels on x-axis and index of event variable on y-axis.\nERP image will have trials on y-axis and time on x-axis\n\nArguments\n\npattern_detection_values::DataFrame\n  DataFrame with columns condition and estimate. Each condition is a value on y-axis.\nevents::DataFrame\n  DataFrame with columns of experimental events and rows with trials. Each value is an event value in a trial.\nerps::Array{Float64, 3}\n  3-dimensional Array of voltages of Event-related potentials. Dimensions: channels, time of recording, trials. \nkwargs...\n  Additional styling behavior. \n\n\nReturn Value: Interactive Figure displaying topoplot series and interactive ERP image.\n\n\n\n\n\n","category":"method"},{"location":"api/#ERPgnostics.inter_toposeries-Tuple{DataFrame}","page":"API / DocStrings","title":"ERPgnostics.inter_toposeries","text":"inter_toposeries(pattern_detection_values::DataFrame; positions::Vector{Point{2, Float64}} = positions_128)\n\nPlot interactive topoplot series.\n\nArguments\n\npattern_detection_values::DataFrame\n  DataFrame with columns condition and estimate. Each condition is resposible for a topoplot. Estimates will be projected across channels. \nkwargs...\n  Additional styling behavior. \n\n\nKeyword arguments (kwargs)\n\npositions::Vector{Point{2, Float64}} = positions_128 \n  Array of topoplot coordinates for channels.\n\nReturn Value: Interactive Figure displaying topoplot series.\n\n\n\n\n\n","category":"method"},{"location":"api/#ERPgnostics.inter_toposeries_image-Tuple{DataFrame, DataFrame, Array{Float64, 3}, Any}","page":"API / DocStrings","title":"ERPgnostics.inter_toposeries_image","text":"inter_toposeries_image(pattern_detection_values::DataFrame, events::DataFrame, erps::Array{Float64, 3}, timing; positions::Vector{Point{2, Float64}} = positions_128)\n\nPlot interactive topoplot series and interactive ERP image.\nERP image will have trials on y-axis and time on x-axis\n\nArguments\n\npattern_detection_values::DataFrame\n  DataFrame with columns condition and estimate. Each condition is resposible for a topoplot. Estimates will be projected across channels. \nevents::DataFrame\n  DataFrame with columns of experimental events and rows with trials. Each value is an event value in a trial.\nerps::Array{Float64, 3}\n  3-dimensional Array of voltages of Event-related potentials. Dimensions: channels, time of recording, trials. \ntiming::?\n  Timing of recording.\nkwargs...\n  Additional styling behavior. \n\n\nKeyword arguments (kwargs)\n\npositions::Vector{Point{2, Float64}} = positions_128 \n  Array of topoplot coordinates for channels.\n\nReturn Value: Interactive Figure displaying topoplot series and interactive ERP image.\n\n\n\n\n\n","category":"method"},{"location":"api/#ERPgnostics.mult_chan_pattern_detector_probability-Tuple{Array{Float64, 3}, Function, DataFrame}","page":"API / DocStrings","title":"ERPgnostics.mult_chan_pattern_detector_probability","text":"mult_chan_pattern_detector_probability(erp_data::Array{Float64, 3}, stat_function::Function, events::DataFrame; n_permutations = 10)\n\nPattern detector.\nMethod:\n- For each channel permute data n_permutations of times.\n- For each permuted data use filter for smearing.\n- Use pattern dection function.\n- Average all this datasets in one. That how we get random data with no pattern: noerp_data.\n- Take the the data where we expect to find a pattern: erp_data. Sort its trials by experimental condition.\n- Smear and use pattern detection function.\n- Find absolute difference of values between erp_data and noerp_data.\n- Do it for each channel and each variable.\n\n\nArguments\n\nerp_data::Array{Float64, 3}\n  3-dimensional Array of voltages of Event-related potentials. Dimensions: channels, time of recording, trials. \nstat_function::Function\n  Function used for pattern detection.\n  For instance, Images.entropy form Images.jl.\nevents::DataFrame\n  DataFrame with columns of experimental events and rows with trials. Each value is an event value in a trial.\nkwargs...\n  Additional styling behavior. \n\n\nKeyword arguments (kwargs)\n\nn_permutations::Number = 10 \n  Number fo permutations of the algorithm.\n\nReturn Value: DataFrame with pattern detection values. Dimensions: experimental events, trials.\n\n\n\n\n\n","category":"method"},{"location":"api/#ERPgnostics.mult_chan_pattern_detector_probability_meanfilter-Tuple{Array{Float64, 3}, Function, DataFrame}","page":"API / DocStrings","title":"ERPgnostics.mult_chan_pattern_detector_probability_meanfilter","text":"mult_chan_pattern_detector_probability_meanfilter(erp_data::Array{Float64, 3}, stat_function::Function, events::DataFrame; n_permutations = 10)\n\nPattern detector.\nMethod:\n- For each channel permute data n_permutations of times.\n- For each permuted data use filter for smearing.\n- Use pattern dection function.\n- Average all this datasets in one. That how we get random data with no pattern: noerp_data.\n- Take the the data where we expect to find a pattern: erp_data. Sort its trials by experimental condition.\n- Smear and use pattern detection function.\n- Find absolute difference of values between erp_data and noerp_data.\n- Do it for each channel and each variable.\n\n\nArguments\n\nerp_data::Array{Float64, 3}\n  3-dimensional Array of voltages of Event-related potentials. Dimensions: channels, time of recording, trials. \nstat_function::Function\n  Function used for pattern detection.\n  For instance, Images.entropy form Images.jl.\nevents::DataFrame\n  DataFrame with columns of experimental events and rows with trials. Each value is an event value in a trial.\nkwargs...\n  Additional styling behavior. \n\n\nKeyword arguments (kwargs)\n\nn_permutations::Number = 10 \n  Number fo permutations of the algorithm.\n\nReturn Value: DataFrame with pattern detection values. Dimensions: experimental events, trials.\n\n\n\n\n\n","category":"method"},{"location":"api/#ERPgnostics.simulate_6patterns","page":"API / DocStrings","title":"ERPgnostics.simulate_6patterns","text":"simulate_6patterns(μ = 3.2, σ = 0.5)\n\nSimulate 6 ERP patterns in one dataset.\nSimulated patterns: Sigmoid, One-sided fan, Two-sided fan, Diverging bar, Hourglass bar, Tilted bar.\nColumns in resulting sim_6patterns Data Frame to simulate this patterns: Δlatency, duration, durationB, iscar, continuous, duration_linear.\n\nArguments\n\nμ::Float = 0.5\n  Controls mean.\nσ::Float = 3.2\n  Controls standart deviation.\n\nReturn Value: sim_6patterns::Matrix{Float64} with voltages and sim_evts::DataFrame with events. \n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API / DocStrings","title":"API / DocStrings","text":"Internally, we use a PlotConfig struct to keep track of common plotting options, so that all functions have a similar API.","category":"page"},{"location":"#ERPgnostics-Documentation","page":"ERPgnostics Documentation","title":"ERPgnostics Documentation","text":"","category":"section"},{"location":"#Hello-World!","page":"ERPgnostics Documentation","title":"Hello World!","text":"","category":"section"}]
}
